import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  readonly title: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(1000)
  readonly content: string;

  @IsNotEmpty()
  readonly category: string;
}
