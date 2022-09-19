import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNumber()
  readonly userId: number;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  readonly title: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(1000)
  readonly content: string;
}
