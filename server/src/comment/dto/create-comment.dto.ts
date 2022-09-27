import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  readonly postId: number;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(500)
  readonly content: string;
}
