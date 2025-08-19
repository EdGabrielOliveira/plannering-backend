import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserIdInterceptor implements NestInterceptor {
  private readonly logger = new Logger(UserIdInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<any>();

    // Se está usando API Key, pular a validação de usuário
    if (request.clientType) {
      return next.handle();
    }

    // Só validar usuário se for autenticação JWT
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
