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

  fetchFollowers(userId: number) {
    console.log('got here')
    return this.followClient.emit('follow:find-followers-for-user', userId);
  }

  fetchFollowingUsers(id: number) {
    return this.followClient.emit('follow:find-following-for-user', id);
  }
}
