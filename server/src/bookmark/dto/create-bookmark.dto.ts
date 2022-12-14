import { IsNotEmpty } from 'class-validator';

export class CreateBookmarkDto {
  @IsNotEmpty()
  readonly postId: number;
}
