import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../src/user/entities/user.entity';
import { Follower } from './entities/follower.entity';
import { FollowerService } from './follower.service';

describe('FollowerService', () => {
  let service: FollowerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FollowerService,
        {
          provide: getRepositoryToken(Follower),
          useValue: {},
        },
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<FollowerService>(FollowerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('delete() - Remove user', async () => {
    const user: User = {
      id: 1,
      description: 'New user registering',
      nickname: 'Test subject',
      profileUri: 'https://ditisgeenlink.com/image',
      username: 'Test_Sub',
      followers: [],
      following: [],
    };

    const user2: User = {
      id: 2,
      description: 'New user registering',
      nickname: 'Changed name',
      profileUri: 'https://ditisgeenlink.com/image',
      username: 'user2',
      followers: [],
      following: [],
    };

    const user3: User = {
      id: 3,
      description: 'New user registering',
      nickname: 'Changed name',
      profileUri: 'https://ditisgeenlink.com/image',
      username: 'user3',
      followers: [],
      following: [],
    };

    
  });
});
