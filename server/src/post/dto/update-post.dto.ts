import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  @IsNotEmpty()
  readonly title?: string;

  @IsOptional()
  @IsNotEmpty()
  readonly content?: string;
}
