import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }

  @Get()
  getPost() {
    return this.postService.getPost();
  }

  @Post()
  addPost() {
    return this.postService.addPost();
  }

  @Put()
  updatePost() {
    return this.postService.updatePost();
  }

  @Delete(':id')
  deletePost(@Param('id', ParseIntPipe) id: number) {
    return this.postService.deletePost(id);
  }
}
