import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Post } from '../post/post.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @ManyToMany(() => Post, (post) => post.tags)
  @JoinTable()
  posts: Post[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
