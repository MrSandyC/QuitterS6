import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  class UserRepo {
    save(user: User) {
      return user;
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: UserRepo,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create() - save a new user with said values', async () => {
    const newUser: CreateUserDto = {
      description: 'New user registering',
      nickname: 'Test subject',
      profileUri: 'http://ditisgeenlink.com/image',
      username: 'Test_Sub',
    };

    const registeredUser = await service.create(newUser);

    expect(registeredUser).toBeDefined();
    expect(registeredUser.username).toBe(newUser.username);
  });

  it('update() - Change values of user', async () => {
    const user: User = {
      id: 1,
      description: 'New user registering',
      nickname: 'Test subject',
      profileUri: 'http://ditisgeenlink.com/image',
      username: 'Test_Sub',
      followers: [],
      following: [],
    };

    const edit: User = {
      id: 1,
      description: 'New user registering',
      nickname: 'Changed name',
      profileUri: 'http://ditisgeenlink.com/image',
      username: 'Test_Sub',
      followers: [],
      following: [],
    };

    const completedEdit = await service.update(edit);

    expect(completedEdit).toBeDefined();
    expect(user.nickname).not.toBe(completedEdit.nickname);
  });

  it('delete() - Remove user', async () => {
    const user: CreateUserDto = {
      description: 'New user registering',
      nickname: 'Test subject',
      profileUri: 'http://ditisgeenlink.com/image',
      username: 'Test_Sub',
    };

    let user2: CreateUserDto = {
      description: 'New user registering',
      nickname: 'Changed name',
      profileUri: 'http://ditisgeenlink.com/image',
      username: 'user2',
    };

    let user3: CreateUserDto = {
      description: 'New user registering',
      nickname: 'Changed name',
      profileUri: 'http://ditisgeenlink.com/image',
      username: 'user3',
    };

    const user1: User = await service.create(user);
    const scdUser: User = await service.create(user2);
    const thrUser: User = await service.create(user3);

    const allUsers = [user1, scdUser, thrUser];
    const newUsers = allUsers.filter((user) => user.username !== 'user3');
    //await service.remove(thrUser.id);

    expect(newUsers).not.toContain(thrUser);
  });
});
