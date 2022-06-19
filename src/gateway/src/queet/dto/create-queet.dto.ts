import { IsNumberString, IsString } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class PostQueetRequest {
  @IsString()
  message: string;

  user: User;
}
