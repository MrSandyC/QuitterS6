import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { RegisterUserRequest } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('User-service') private readonly userClient: ClientProxy,
    @Inject('Queet-service') private readonly queetClient: ClientProxy,
    @Inject('Follow-service') private readonly followClient: ClientProxy,
  ) {}
  fetchAllUsers() {
    return this.userClient.send('user:find-all', {});
  }

  createUser(registerUserRequest: RegisterUserRequest) {
    this.queetClient.emit('user:register', registerUserRequest);
    this.followClient.emit('user:register', registerUserRequest);
    return this.userClient.emit('user:register', registerUserRequest);
  }

  fetchUserById(id: number) {
    return this.userClient.send('user:find-by-id', id);
  }

  checkIfUserExists(auth0id: string) {
    return this.userClient.send('user:check-if-exists', auth0id);
  }

  removeUser(id: number) {
    this.queetClient.emit('user:remove', id);
    this.followClient.emit('user:remove', id);
    return this.userClient.emit('user:remove', id);
  }

  updateUser(updateUserDto: UpdateUserDto) {
    this.queetClient.emit('user:update', updateUserDto);
    this.followClient.emit('user:update', updateUserDto);
    return this.userClient.emit('user:update', updateUserDto);
  }

  fetchUserByUsername(username: string) {
    return this.userClient.send('user:fetch-by-username', username);
  }

  fetchUserByAuth0token(auth0id: string) {
    return this.userClient.send('user:fetch-by-auth0', auth0id);
  }
}
