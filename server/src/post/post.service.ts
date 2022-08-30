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

  deletePost(id: number) {
    return `Deleting post with id ${id}`;
  }
}
