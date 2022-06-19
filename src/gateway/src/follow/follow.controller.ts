import { Controller, Get, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { NewFollowerRequest } from './dto/new-follow.dto';
import { FollowService } from './follow.service';

@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post()
  followUser(@Payload() followRequest: NewFollowerRequest) {
    console.log('got here');
    return this.followService.followUser(followRequest);
  }

  @Post('/unfollow')
  unfollowUser(@Payload() followRequest: NewFollowerRequest) {
    return this.followService.unfollowUser(followRequest);
  }

  @Post('/followers')
  fetchFollowers(@Payload() username: string) {
    console.log(username);
    return this.followService.fetchFollowers(username);
  }

  @Get('/following')
  fetchFollowingUsers(@Payload() username: string) {
    return this.followService.fetchFollowingUsers(username);
  }
}
