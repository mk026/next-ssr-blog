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
    return this.postRepository.find({ order: { createdAt: 'DESC' } });
  }

  getPopularPosts() {
    return this.postRepository.find({ order: { views: 'DESC' } });
  }

  async getPost(id: number) {
    const found = await this.postRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    return found;
  }

  async addPost(createPostDto: CreatePostDto, userId: number) {
    const post = this.postRepository.create({
      ...createPostDto,
      user: { id: userId },
    });
    await this.postRepository.save(post);
  }

  async updatePost(id: number, updatePostDto: UpdatePostDto, userId: number) {
    const result = await this.postRepository.update(
      { id, user: { id: userId } },
      updatePostDto,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
  }

  async deletePost(id: number, userId: number) {
    const result = await this.postRepository.delete({
      id,
      user: { id: userId },
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
  }
}
