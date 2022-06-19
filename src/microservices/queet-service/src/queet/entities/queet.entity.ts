import { User } from '../../user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Queet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  message: string;

  @ManyToOne(() => User, (user) => user.queets, { onDelete: 'CASCADE' })
  user: User;

  @CreateDateColumn()
  created_at: Date;
}
