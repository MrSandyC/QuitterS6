import { PartialType } from '@nestjs/mapped-types';
import { RegisterUserRequest } from './register-user.dto';

export class UpdateUserDto extends PartialType(RegisterUserRequest) {
  id: number;
}
