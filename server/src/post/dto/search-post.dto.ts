import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

import { PaginationDto } from '../../common/dto/pagination.dto';

export class SearchPostDto extends PaginationDto {
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
}
