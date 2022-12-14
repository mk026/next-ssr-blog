import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bookmark {
  @PrimaryGeneratedColumn()
  id: number;
}
