import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePostDto } from './dto/create-post.dto';
import { SearchPostDto } from './dto/search-post.dto';
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

  getBookmarkedPosts(userId: number) {
    return this.postRepository.findBy({ bookmarks: { user: { id: userId } } });
  }

  async searchPosts(searchPostDto: SearchPostDto) {
    const qb = this.postRepository.createQueryBuilder('posts');

    if (searchPostDto.views) {
      qb.orderBy('views', searchPostDto.views);
    }
    if (searchPostDto.offset) {
      qb.skip(searchPostDto.offset);
    }
    if (searchPostDto.limit) {
      qb.take(searchPostDto.limit);
    }
    if (searchPostDto.title) {
      qb.andWhere('posts.title ILIKE :title', {
        title: `%${searchPostDto.title}%`,
      });
    }
    if (searchPostDto.content) {
      qb.andWhere('posts.content ILIKE :content', {
        content: `%${searchPostDto.content}%`,
      });
    }
    if (searchPostDto.userId) {
      qb.andWhere('posts.userId = :userId', {
        userId: searchPostDto.userId,
      });
    }
    if (searchPostDto.categoryId) {
      qb.andWhere('posts.categoryId = :categoryId', {
        categoryId: searchPostDto.categoryId,
      });
    }

    qb.leftJoinAndSelect('posts.user', 'user');
    qb.leftJoinAndSelect('posts.category', 'category');

    const [items, count] = await qb.getManyAndCount();
    return { items, count };
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
      title: createPostDto.title,
      description: createPostDto.description,
      content: createPostDto.content,
      user: { id: userId },
      category: { id: createPostDto.categoryId },
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
