import { IsNumber } from 'class-validator';

export class NewFollowerRequest {
  @IsNumber()
  follower: number;

  @IsNumber()
  following: number;
}
