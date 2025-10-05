import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';

interface AuthenticatedUser {
  id: string;
  email: string;
  sub: string;
}

interface RequestBody {
  usuarioId?: string;
  [key: string]: unknown;
}

interface RequestWithAuth {
  user?: AuthenticatedUser;
  clientType?: string;
  body?: RequestBody;
  method: string;
}

@Injectable()
export class UserIdInterceptor implements NestInterceptor {
  private readonly logger = new Logger(UserIdInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<RequestWithAuth>();

    if (request.clientType) {
      return next.handle();
    }

    if (!request.user) {
      this.logger.warn('Tentativa de acesso sem usuário autenticado');
      throw new UnauthorizedException('Usuário não autenticado');
    }

    const userId = request.user.id;

    if (['POST', 'PUT', 'PATCH'].includes(request.method) && userId) {
      if (request.body && typeof request.body === 'object') {
        if (request.body.usuarioId && request.body.usuarioId !== userId) {
          this.logger.warn(
            `Tentativa de modificar dados de outro usuário: ${request.user.email}`,
          );
          throw new UnauthorizedException(
            'Não é possível modificar dados de outro usuário',
          );
        }

        request.body.usuarioId = userId;
      }
    }

    return next.handle();
  }
}
