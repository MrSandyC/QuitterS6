import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('user:register')
  create(@Payload() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

  @MessagePattern('user:find-all')
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern('user:find-one')
  findOne(@Payload() id: number) {
    return this.userService.findOne(id);
  }

  @MessagePattern('user:update')
  update(@Payload() updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern('user:delete')
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }
}
