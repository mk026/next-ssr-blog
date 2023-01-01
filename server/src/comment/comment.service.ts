import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { GetCommentsDto } from './dto/get-comments.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async getComments(getCommentsDto: GetCommentsDto) {
    const comments = await this.commentRepository.find({
      where: { post: { id: getCommentsDto.postId } },
      skip: getCommentsDto.skip,
      take: getCommentsDto.take,
      relations: { user: true },
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

  async updateComment(
    id: number,
    updateCommentDto: UpdateCommentDto,
    userId: number,
  ) {
    const result = await this.commentRepository.update(
      { id, user: { id: userId } },
      updateCommentDto,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
  }

  async deleteComment(id: number, userId: number) {
    const result = await this.commentRepository.delete({
      id,
      user: { id: userId },
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
  }
}
