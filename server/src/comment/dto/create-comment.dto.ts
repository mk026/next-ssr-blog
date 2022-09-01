import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  readonly userId: number;

  @IsNotEmpty()
  readonly content: string;
}
