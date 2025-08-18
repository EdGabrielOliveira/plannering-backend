import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    this.logger.log(`Tentativa de acesso: ${request.method} ${request.url}`);

    if (err || !user) {
      if (info instanceof TokenExpiredError) {
        this.logger.warn('Token expirado');
        throw new UnauthorizedException('Token expirado');
      }

      if (info instanceof JsonWebTokenError) {
        this.logger.warn('Token inválido');
        throw new UnauthorizedException('Token inválido');
      }

      this.logger.warn('Acesso negado - token ausente ou inválido');
      throw new UnauthorizedException('Acesso negado');
    }

    if (!user.id || !user.email) {
      this.logger.warn('Token com payload inválido');
      throw new UnauthorizedException('Token inválido');
    }

    return user;
  }
}
