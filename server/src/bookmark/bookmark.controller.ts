import { Controller, Get, Post } from '@nestjs/common';

import { BookmarkService } from './bookmark.service';

@Controller('bookmarks')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Get()
  getBookmarks() {
    return this.bookmarkService.getBookmarks();
  }

  @Post()
  addBookmark() {
    return this.bookmarkService.addBookmark();
  }
}
