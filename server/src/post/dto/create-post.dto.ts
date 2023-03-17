import { IsInt, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  readonly title: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(500)
  readonly excerpt: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(5000)
  readonly content: string;

  @IsInt()
  readonly categoryId: number;
}
