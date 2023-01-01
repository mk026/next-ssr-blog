import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

import { PaginationDto } from '../../common/dto/pagination.dto';

export class GetCommentsDto extends PaginationDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly postId?: number;
}
