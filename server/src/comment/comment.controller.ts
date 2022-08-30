import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  getComments() {
    return this.commentService.getComments();
  }

  @Post()
  addComment() {
    return this.commentService.addComment();
  }

  @Put()
  updateComment() {
    return this.commentService.updateComment();
  }

  @Delete(':id')
  deleteComment(@Param('id') id: string) {
    return this.commentService.deleteComment(id);
  }
}
