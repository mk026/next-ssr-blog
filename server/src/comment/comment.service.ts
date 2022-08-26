import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  getComments() {
    return 'Get all comments';
  }

  addComment() {
    return 'Add new comment';
  }

  updateComment() {
    return 'Update comment';
  }

  deleteComment() {
    return 'Delete comment';
  }
}
