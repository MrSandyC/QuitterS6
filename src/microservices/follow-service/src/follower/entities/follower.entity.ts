import { User } from 'src/user/entities/user.entity';
import { Entity, ManyToMany, ManyToOne, Unique } from 'typeorm';

@Unique('following_users', ['follower', 'followee'])
@Entity('user_followers')
export class Follower {
  @ManyToMany(() => User)
  follower: User;

  @ManyToOne(() => User)
  followee: User;
}
