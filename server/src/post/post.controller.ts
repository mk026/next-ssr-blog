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
  getBookmarkedPosts(@AuthUser() userId: number) {
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
  addPost(@Body() createPostDto: CreatePostDto, @AuthUser() userId: number) {
    return this.postService.addPost(createPostDto, userId);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
    @AuthUser() userId: number,
  ) {
    return this.postService.updatePost(id, updatePostDto, userId);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  deletePost(
    @Param('id', ParseIntPipe) id: number,
    @AuthUser() userId: number,
  ) {
    return this.postService.deletePost(id, userId);
  }
}
