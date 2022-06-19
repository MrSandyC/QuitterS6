import { IsNumberString, IsString, Length } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class Queet {
  @IsNumberString()
  id: number;

  @IsString()
  @Length(0, 144)
  message: string;

  user: User;
}
