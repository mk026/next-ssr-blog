import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  getPosts() {
    return this.postRepository.find();
  }

  async getPost(id: number) {
    const found = await this.postRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    return found;
  }

  async addPost(createPostDto: CreatePostDto) {
    const post = this.postRepository.create(createPostDto);
    await this.postRepository.save(post);
  }

  updatePost(updatePostDto: UpdatePostDto) {
    return updatePostDto;
  }

  deletePost(id: number) {
    return `Deleting post with id ${id}`;
  }
}
