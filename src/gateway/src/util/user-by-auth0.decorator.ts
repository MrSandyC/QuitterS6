import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUserByAuth0Token = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
