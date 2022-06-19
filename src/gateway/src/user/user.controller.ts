import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { RegisterUserRequest } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  fetchAllUsers() {
    return this.userService.fetchAllUsers();
  }

  @Post()
  registerUser(@Payload() registerUserRequest: RegisterUserRequest) {
    console.log(registerUserRequest);
    return this.userService.createUser(registerUserRequest);
  }

  @Get('/check')
  checkUserByAuth0(@Payload() auth0token: string) {
    console.log(auth0token);
    const user = this.userService.checkIfUserExists(auth0token);
    try {
      return user;
    } catch {
      return false;
    }
  }

  @Post('/byAuth0')
  fetchUserByAuth0(@Body() body) {
    return this.userService.fetchUserByAuth0token(body.auth0id);
  }

  @Delete('/byAuth0')
  deleteAllUserData(@Body() body) {
    let user: User;
    const data = this.userService.checkIfUserExists(body.auth0id);
    this.userService
      .checkIfUserExists(body.auth0id)
      .subscribe((value: User) => {
        this.userService.removeUser(value.id);
      });
    // data.subscribe((value: User) => {
    //   user = value;
    // });
    console.log(user);
  }

  @Put()
  updateUser(@Payload() updateUserDto: UpdateUserDto) {
    console.log('got here');
    return this.userService.updateUser(updateUserDto);
  }

  @Post('/username')
  fetchUserByUsername(@Body() body) {
    return this.userService.fetchUserByUsername(body.username);
  }

  @Get(':id')
  fetchUserById(@Payload() id: number) {
    return this.userService.fetchUserById(id);
  }

  @Delete()
  removeUser(@Payload() id: number) {
    return this.userService.removeUser(id);
  }
}
