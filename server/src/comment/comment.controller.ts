import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('comments')
export class CommentController {
  @Get()
  getComments() {
    return 'All comments';
  }

  @Post()
  addComment() {
    return 'Add comment';
  }

  @Put()
  updateComment() {
    return 'Update comment';
  }

  @Delete()
  deleteComment() {
    return 'Delete comment';
  }
}
