import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user?: { id: string; email: string; nome: string };
}

export const GetCurrentUserId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<RequestWithUser>();

    if (!request.user) {
      throw new Error('Usuário não encontrado. O JwtAuthGuard está aplicado?');
    }

    return request.user.id;
  },
);
