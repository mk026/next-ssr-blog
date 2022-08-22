import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getPosts() {
    return 'Get all posts';
  }

  addPost() {
    return 'Add new post';
  }

  updatePost() {
    return 'Update post';
  }

  deletePost() {
    return 'Delete post';
  }
}
