import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetCommentsDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly postId?: number;
}
