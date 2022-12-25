import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  readonly title: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(500)
  readonly description: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(5000)
  readonly content: string;

  @IsNumber()
  readonly categoryId: number;
}
