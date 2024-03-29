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

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../common/decorators/auth-user.decorator';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostsDto } from './dto/get-posts.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts(@Query() getPostsDto: GetPostsDto) {
    return this.postService.getPosts(getPostsDto);
  }

  @Get('popular')
  getPopularPosts(@Query() getPostsDto: GetPostsDto) {
    return this.postService.getPopularPosts(getPostsDto);
  }

  @Get('bookmarked')
  @UseGuards(JwtAuthGuard)
  getBookmarkedPosts(
    @Query() getPostsDto: GetPostsDto,
    @AuthUser() userId: number,
  ) {
    return this.postService.getBookmarkedPosts(getPostsDto, userId);
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
  @UseGuards(JwtAuthGuard)
  addPost(@Body() createPostDto: CreatePostDto, @AuthUser() userId: number) {
    return this.postService.addPost(createPostDto, userId);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
    @AuthUser() userId: number,
  ) {
    return this.postService.updatePost(id, updatePostDto, userId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deletePost(
    @Param('id', ParseIntPipe) id: number,
    @AuthUser() userId: number,
  ) {
    return this.postService.deletePost(id, userId);
  }
}
