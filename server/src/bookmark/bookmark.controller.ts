import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { BookmarkService } from './bookmark.service';

@Controller('bookmarks')
@UseGuards(AuthGuard())
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
