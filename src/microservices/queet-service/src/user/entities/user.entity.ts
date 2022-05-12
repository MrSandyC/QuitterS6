import { Queet } from '../../../src/queet/entities/queet.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  username: string;

  @Column()
  profileUri: string;

  @OneToMany(() => Queet, (queet) => queet.user)
  queets: Queet[];

  @CreateDateColumn()
  created_at: Date;
}
