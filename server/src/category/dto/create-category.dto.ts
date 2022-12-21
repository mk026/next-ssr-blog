import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  readonly title: string;
}
