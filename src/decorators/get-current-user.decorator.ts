import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: {
    sub: number;
    [key: string]: any;
  };
}

export const GetCurrentUserId = createParamDecorator(
  (data: unknown, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    return request.user.sub;
  },
);
