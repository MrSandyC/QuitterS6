import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userRepository.save(createUserDto);
  }

  async followersByUserId(userId: number) {
    return this.userRepository.findOne(userId, {
      relations: ['followers'],
    });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(updateUserDto: UpdateUserDto) {
    return this.userRepository.save(updateUserDto);
  }

  remove(id: number) {
    this.userRepository.delete(id);
  }
}
