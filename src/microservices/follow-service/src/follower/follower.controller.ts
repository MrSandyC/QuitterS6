import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FollowerService } from './follower.service';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';

@Controller()
export class FollowerController {
  constructor(private readonly followerService: FollowerService) {}

  @MessagePattern('follow:new-follow')
  create(@Payload() createFollowerDto: CreateFollowerDto) {
    console.log(createFollowerDto);
    return this.followerService.create(createFollowerDto);
  }

  @MessagePattern('follow:unfollow-user')
  unfollow(@Payload() createFollowerDto: CreateFollowerDto) {
    console.log(createFollowerDto);
    return this.followerService.unfollowUser(createFollowerDto);
  }

  @MessagePattern('follow:find-following-for-user')
  findFollowingByUserId(@Payload() username: string) {
    return this.followerService.followingByUsername(username);
  }

  @MessagePattern('follow:find-followers-for-user')
  findFollowersByUserId(@Payload() username: string) {
    console.log(username);
    return this.followerService.followingByUsername(username);
  }

  @MessagePattern('updateFollower')
  update(@Payload() updateFollowerDto: UpdateFollowerDto) {
    return this.followerService.update(updateFollowerDto.id, updateFollowerDto);
  }

  @MessagePattern('follow:unfollow:user')
  remove(@Payload() id: number) {
    return this.followerService.remove(id);
  }
}
