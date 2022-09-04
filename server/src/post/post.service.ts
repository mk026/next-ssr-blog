import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  getPosts() {
    return 'Get all posts';
  }

  getPost(id: number) {
    return `Post with id ${id}`;
  }

  addPost(createPostDto: CreatePostDto) {
    return createPostDto;
  }

  updatePost(updatePostDto: UpdatePostDto) {
    return updatePostDto;
  }

  deletePost(id: number) {
    return `Deleting post with id ${id}`;
  }
}
