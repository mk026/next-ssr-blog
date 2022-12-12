import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Post } from '../post/post.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Post, (post) => post.category)
  posts: Post[];
}
