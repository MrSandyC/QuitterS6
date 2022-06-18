import { IsNumberString, IsString, IsUrl, Length } from 'class-validator';
import { Queet } from 'src/queet/entities/queet.entity';

export class User {
  @IsNumberString()
  id: number;

  @IsString()
  auth0id: string;

  @IsString()
  @Length(6, 15)
  nickname: string;

  @IsString()
  @Length(0, 120)
  description: string;

  @IsString()
  location: string;

  @IsString()
  @Length(6, 15)
  username: string;

  @IsUrl()
  profileUri: string;
  queets: Queet[];
}
