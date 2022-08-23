import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getPosts() {
    return 'Get all posts';
  }

  getPost() {
    return 'Get single post';
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
