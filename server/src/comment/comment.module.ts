import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../post/post.entity';
import { AuthModule } from '../auth/auth.module';
import { CommentController } from './comment.controller';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Post]), AuthModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
