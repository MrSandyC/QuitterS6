import { IsNumberString, IsString } from 'class-validator';

export class PostQueetRequest {
  @IsString()
  message: string;

  @IsNumberString()
  userId: number;
}
