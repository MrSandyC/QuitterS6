import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NewFollowerRequest } from './dto/new-follow.dto';

@Injectable()
export class FollowService {
  constructor(
    @Inject('Follow-service') private readonly followClient: ClientProxy,
  ) {}
  followUser(followRequest: NewFollowerRequest) {
    console.log(followRequest);
    this.followClient.emit('follow:new-follow', followRequest);
  }

  unfollowUser(followRequest: NewFollowerRequest) {
    this.followClient.emit('follow:unfollow-user', followRequest);
  }
}