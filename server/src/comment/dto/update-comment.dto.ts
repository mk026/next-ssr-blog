import { IsNotEmpty } from 'class-validator';

export class UpdateCommentDto {
  @IsNotEmpty()
  readonly content: string;
}
