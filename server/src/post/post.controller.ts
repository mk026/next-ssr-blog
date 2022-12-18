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

import { GetUser } from '../auth/get-user.decorator';
import { CreatePostDto } from './dto/create-post.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }

  @Get('popular')
  getPopularPosts() {
    return this.postService.getPopularPosts();
  }

  @Get('bookmarked')
  @UseGuards(AuthGuard())
  getBookmarkedPosts(@GetUser() userId: number) {
    return this.postService.getBookmarkedPosts(userId);
  }

  @Get('search')
  searchPosts(@Query() searchPostDto: SearchPostDto) {
    return this.postService.searchPosts(searchPostDto);
  }

  @Get(':id')
  getPost(@Param('id', ParseIntPipe) id: number) {
    return this.postService.getPost(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  addPost(@Body() createPostDto: CreatePostDto, @GetUser() userId: number) {
    return this.postService.addPost(createPostDto, userId);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
    @GetUser() userId: number,
  ) {
    return this.postService.updatePost(id, updatePostDto, userId);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  deletePost(@Param('id', ParseIntPipe) id: number, @GetUser() userId: number) {
    return this.postService.deletePost(id, userId);
  }
}
