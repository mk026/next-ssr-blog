import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { GetUser } from '../auth/get-user.decorator';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
@UseGuards(AuthGuard())
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Get()
  getBookmarks(@GetUser() userId: number) {
    return this.bookmarkService.getBookmarks(userId);
  }

  @Post()
  addBookmark(
    @Body() createBookmarkDto: CreateBookmarkDto,
    @GetUser() userId: number,
  ) {
    return this.bookmarkService.addBookmark(createBookmarkDto, userId);
  }

  @Delete(':id')
  deleteBookmark(@Param('id') id: number) {
    return this.bookmarkService.deleteBookmark(id);
  }
}
