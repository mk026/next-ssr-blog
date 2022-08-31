import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  getComments() {
    return 'Get all comments';
  }

  addComment(createCommentDto: CreateCommentDto) {
    return createCommentDto;
  }

  updateComment() {
    return 'Update comment';
  }

  deleteComment(id: number) {
    return `Deleting comment with id ${id}`;
  }
}
