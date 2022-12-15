import { IsIn, IsNumber, IsOptional, IsString } from 'class-validator';

export class SearchPostDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly content?: string;

  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  readonly views?: 'ASC' | 'DESC';

  @IsOptional()
  @IsNumber()
  readonly userId?: number;

  @IsOptional()
  @IsNumber()
  readonly offset?: number;

  @IsOptional()
  @IsNumber()
  readonly limit?: number;
}
