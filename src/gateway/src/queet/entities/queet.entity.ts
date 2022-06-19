import { IsNumberString, IsString, Length } from 'class-validator';

export class Queet {
  @IsNumberString()
  id: number;

  @IsString()
  @Length(0, 144)
  message: string;

  @IsNumberString()
  userId: number;
}
