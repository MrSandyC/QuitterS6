import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AddUserId = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    request.user.id = 1;
    return request.user;
  },
);
