import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthUser } from '../common/decorators/auth-user.decorator';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  getComments(@Query('postId', ParseIntPipe) postId: number) {
    return this.commentService.getComments(postId);
  }

  @Post()
  @UseGuards(AuthGuard())
  addComment(
    @Body() createCommentDto: CreateCommentDto,
    @AuthUser() userId: number,
  ) {
    return this.commentService.addComment(createCommentDto, userId);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  updateComment(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCommentDto: UpdateCommentDto,
    @AuthUser() userId: number,
  ) {
    return this.commentService.updateComment(id, updateCommentDto, userId);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  deleteComment(
    @Param('id', ParseIntPipe) id: number,
    @AuthUser() userId: number,
  ) {
    return this.commentService.deleteComment(id, userId);
  }
}
