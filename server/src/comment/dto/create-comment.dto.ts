import { IsInt, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsInt()
  readonly postId: number;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(500)
  readonly content: string;
}
