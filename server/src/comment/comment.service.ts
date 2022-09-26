import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../post/post.entity';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async getComments(postId: number) {
    const post = await this.postRepository.findOne({
      where: { id: postId },
      relations: { comments: true },
    });
    return post.comments;
  }

  async addComment(createCommentDto: CreateCommentDto) {
    const comment = this.commentRepository.create(createCommentDto);
    await this.commentRepository.save(comment);
  }

  async updateComment(id: number, updateCommentDto: UpdateCommentDto) {
    const result = await this.commentRepository.update(id, updateCommentDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
  }

  async deleteComment(id: number) {
    const result = await this.commentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
  }
}
