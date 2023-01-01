import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

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
  @IsInt()
  @Type(() => Number)
  readonly userId?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly categoryId?: number;

  @IsOptional()
  @IsInt()
  readonly offset?: number;

  @IsOptional()
  @IsInt()
  readonly limit?: number;
}
