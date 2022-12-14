import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarkService {
  getBookmarks(userId: number) {
    return `Get bookmarks for user with id ${userId}`;
  }

  addBookmark(createBookmarkDto: CreateBookmarkDto, userId: number) {
    return `Add bookmark for user with id ${userId} with post id ${createBookmarkDto.postId}`;
  }
}
