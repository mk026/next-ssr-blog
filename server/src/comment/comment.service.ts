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

  getComments(postId: number) {
    return this.commentRepository.find({ where: { postId } });
  }

  async addComment(createCommentDto: CreateCommentDto) {
    const comment = this.commentRepository.create(createCommentDto);
    await this.commentRepository.save(comment);
  }

  updateComment(updateCommentDto: UpdateCommentDto) {
    return updateCommentDto;
  }

  async deleteComment(id: number) {
    const result = await this.commentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
  }
}
