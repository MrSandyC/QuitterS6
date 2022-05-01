import { IsNumberString } from 'class-validator';

export class NewFollowerRequest {
  @IsNumberString()
  follower: number;

  @IsNumberString()
  following: number;
}
