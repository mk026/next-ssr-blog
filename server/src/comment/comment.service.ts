import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  getComments() {
    return 'Get all comments';
  }

  addComment(createCommentDto: CreateCommentDto) {
    return createCommentDto;
  }

  updateComment(updateCommentDto: UpdateCommentDto) {
    return updateCommentDto;
  }

  deleteComment(id: number) {
    return `Deleting comment with id ${id}`;
  }
}
