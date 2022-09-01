import { OmitType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends OmitType(CreateCommentDto, [
  'userId',
] as const) {}
