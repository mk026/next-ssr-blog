import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, PostModule, CommentModule],
})
export class AppModule {}
