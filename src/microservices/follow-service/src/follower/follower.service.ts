import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';

@Injectable()
export class FollowerService {
  constructor(
    @InjectRepository(User)
    private readonly followRepository: Repository<User>,
  ) {}
  async create(createFollowerDto: CreateFollowerDto) {
    const user = await this.followRepository.findOne(
      createFollowerDto.following,
      {
        relations: ['followers'],
      },
    );
    const follower = await this.followRepository.findOne(
      createFollowerDto.follower,
    );
    user.followers.push(follower);
    console.log(user);
    return this.followRepository.save(user);
  }

  async unfollowUser(createFollowerDto: CreateFollowerDto) {
    const user = await this.followRepository.findOne(
      createFollowerDto.following,
      {
        relations: ['followers'],
      },
    );
    const follower = await this.followRepository.findOne(
      createFollowerDto.follower,
    );
    const index = user.followers.indexOf(follower);
    user.followers.splice(index);
    return this.followRepository.save(user);
  }

  async followersByUserId(userId: any) {
    return this.followRepository.findOneOrFail(userId, {
      relations: ['followers'],
    });
  }

  async followingByUserId(userId: any) {
    return this.followRepository.findOneOrFail(userId, {
      relations: ['following'],
    });
  }

  findAll() {
    return `This action returns all follower`;
  }

  findOne(id: number) {
    return `This action returns a #${id} follower`;
  }

  update(id: number, updateFollowerDto: UpdateFollowerDto) {
    return `This action updates a #${id} follower`;
  }

  remove(id: number) {
    return `This action removes a #${id} follower`;
  }
}
