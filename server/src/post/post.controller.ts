import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostController {
  @Get()
  getPosts() {
    return '';
  }

  @Post()
  addPost() {
    return '';
  }

  @Put()
  updatePost() {
    return '';
  }

  @Delete()
  deletePost() {
    return '';
  }
}
