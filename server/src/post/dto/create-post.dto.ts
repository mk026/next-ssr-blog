import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  readonly title: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(1000)
  readonly content: string;

  @IsNumber()
  readonly categoryId: number;
}
