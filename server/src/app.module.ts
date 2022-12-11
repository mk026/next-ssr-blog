import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import typeOrmConfig from './config/typeorm.config';
import { validate } from './validation/env.validation';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate }),
    TypeOrmModule.forRootAsync({ useFactory: typeOrmConfig }),
    AuthModule,
    UserModule,
    PostModule,
    CommentModule,
    TagModule,
    CategoryModule,
  ],
})
export class AppModule {}
