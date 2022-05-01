import { IsNumberString, IsString, IsUrl } from 'class-validator';
import { Queet } from 'src/queet/entities/queet.entity';

export class User {
  @IsNumberString()
  id: number;

  @IsString()
  auth0id: string;

  @IsString()
  nickname: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsString()
  username: string;

  @IsUrl()
  profileUri: string;
  queets: Queet[];
}
