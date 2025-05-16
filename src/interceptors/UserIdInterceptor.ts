import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserIdInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: { sub: string } }>();
    const userId = request.user?.sub;

    if (['POST', 'PUT', 'PATCH'].includes(request.method) && userId) {
      (request.body as Record<string, any>).usuarioId = userId;
    }

    return next.handle();
  }
}
