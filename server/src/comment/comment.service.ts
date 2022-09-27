import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async getComments(postId: number) {
    const comments = await this.commentRepository.find({
      where: { post: { id: postId } },
    });
    return comments;
  }

  async addComment(createCommentDto: CreateCommentDto, userId: number) {
    const { postId, content } = createCommentDto;
    const comment = this.commentRepository.create({
      content,
      post: { id: postId },
      user: { id: userId },
    });
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
