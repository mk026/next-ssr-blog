import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import typeOrmConfig from './config/typeorm.config';
import { validate } from './config/env.validation';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate }),
    TypeOrmModule.forRootAsync({ useFactory: typeOrmConfig }),
    AuthModule,
    UserModule,
    PostModule,
    CommentModule,
  ],
})
export class AppModule {}
