import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePostDto {
  @IsNumber()
  readonly userId: number;

  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly content: string;
}
