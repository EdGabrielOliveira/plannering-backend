import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';

// Interface para tipagem do request com usuário
interface RequestWithUser extends Request {
  user?: {
    id: string | number;
  };
}

@Injectable()
export class PrismaUserFilterInterceptor implements NestInterceptor {
  constructor(private prisma: PrismaService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<RequestWithUser>();

    // Verifica se o usuário está autenticado
    if (request.user && request.user.id) {
      // Armazena o ID do usuário em um contexto global que o Prisma pode acessar
      this.prisma.setUsuarioContexto(String(request.user.id));
    }

    return next.handle();
  }
}
