import { IsNumberString, IsString } from 'class-validator';

export class Queet {
  @IsNumberString()
  id: number;

  @IsString()
  message: string;

  @IsNumberString()
  userId: number;
}
