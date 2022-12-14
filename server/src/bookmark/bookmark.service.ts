import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bookmark } from './bookmark.entity';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private readonly bookmarkRepository: Repository<Bookmark>,
  ) {}

  getBookmarks(userId: number) {
    return `Get bookmarks for user with id ${userId}`;
  }

  addBookmark(createBookmarkDto: CreateBookmarkDto, userId: number) {
    return `Add bookmark for user with id ${userId} with post id ${createBookmarkDto.postId}`;
  }
}
