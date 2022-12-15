import { IsNotEmpty } from 'class-validator';

export class SearchPostDto {
  @IsNotEmpty()
  readonly title?: string;

  @IsNotEmpty()
  readonly content?: string;

  @IsNotEmpty()
  readonly views?: 'ASC' | 'DESC';

  @IsNotEmpty()
  readonly userId?: number;

  @IsNotEmpty()
  readonly offset?: number;

  @IsNotEmpty()
  readonly limit?: number;
}
