import { IsInt } from 'class-validator';

export class CreateBookmarkDto {
  @IsInt()
  readonly postId: number;
}
