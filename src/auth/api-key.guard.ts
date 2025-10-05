import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export enum ApiKeyType {
  WEB = 'WEB',
  MOBILE = 'MOBILE',
  ANY = 'ANY',
}

export const API_KEY_TYPES = 'apiKeyTypes';

interface RequestWithApiKey {
  headers: {
    'x-api-key'?: string;
    [key: string]: string | string[] | undefined;
  };
  query?: {
    apiKey?: string;
    [key: string]: unknown;
  };
  clientType?: string;
}

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly logger = new Logger(ApiKeyGuard.name);

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredApiKeyTypes = this.reflector.getAllAndOverride<ApiKeyType[]>(
      API_KEY_TYPES,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredApiKeyTypes) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithApiKey>();
    const apiKey = this.extractApiKey(request);

    if (!apiKey) {
      this.logger.warn('Tentativa de acesso sem API Key');
      throw new UnauthorizedException('API Key é obrigatória');
    }

    const isValidApiKey = this.validateApiKey(apiKey, requiredApiKeyTypes);

    if (!isValidApiKey) {
      this.logger.warn(`API Key inválida: ${apiKey.substring(0, 10)}...`);
      throw new UnauthorizedException('API Key inválida');
    }

    request.clientType = this.getClientType(apiKey);
    this.logger.log(
      `Acesso autorizado via API Key - Tipo: ${request.clientType}`,
    );

    return true;
  }

  private extractApiKey(request: RequestWithApiKey): string | null {
    const headerApiKey = request.headers['x-api-key'];
    if (headerApiKey && typeof headerApiKey === 'string') {
      return headerApiKey;
    }

    const queryApiKey = request.query?.apiKey;
    if (queryApiKey && typeof queryApiKey === 'string') {
      return queryApiKey;
    }

    return null;
  }

  private validateApiKey(apiKey: string, requiredTypes: ApiKeyType[]): boolean {
    const webApiKey = process.env.WEB_API_KEY;
    const mobileApiKey = process.env.MOBILE_API_KEY;

    if (requiredTypes.includes(ApiKeyType.ANY)) {
      return apiKey === webApiKey || apiKey === mobileApiKey;
    }

    if (requiredTypes.includes(ApiKeyType.WEB) && apiKey === webApiKey) {
      return true;
    }

    if (requiredTypes.includes(ApiKeyType.MOBILE) && apiKey === mobileApiKey) {
      return true;
    }

    return false;
  }

  private getClientType(apiKey: string): string {
    const webApiKey = process.env.WEB_API_KEY;
    const mobileApiKey = process.env.MOBILE_API_KEY;

    if (apiKey === webApiKey) {
      return 'WEB';
    }
    if (apiKey === mobileApiKey) {
      return 'MOBILE';
    }
    return 'UNKNOWN';
  }
}
