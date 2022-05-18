import { Controller, Get, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { NewFollowerRequest } from './dto/new-follow.dto';
import { FollowService } from './follow.service';

@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post()
  followUser(@Payload() followRequest: NewFollowerRequest) {
    console.log(followRequest);
    return this.followService.followUser(followRequest);
  }

  @Post('/unfollow')
  unfollowUser(@Payload() followRequest: NewFollowerRequest) {
    return this.followService.unfollowUser(followRequest);
  }

  @Get('/followers')
  fetchFollowers(@Payload() id: number) {
    return this.followService.fetchFollowers(id);
  }
}
