import { Injectable } from '@nestjs/common';
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

  getComments() {
    return this.commentRepository.find();
  }

  addComment(createCommentDto: CreateCommentDto) {
    return createCommentDto;
  }

  updateComment(updateCommentDto: UpdateCommentDto) {
    return updateCommentDto;
  }

  deleteComment(id: number) {
    return `Deleting comment with id ${id}`;
  }
}
