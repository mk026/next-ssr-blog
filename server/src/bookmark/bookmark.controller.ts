import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthUser } from '../common/decorators/auth-user.decorator';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
@UseGuards(AuthGuard())
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Get()
  getBookmarks(@AuthUser() userId: number) {
    return this.bookmarkService.getBookmarks(userId);
  }

  @Post()
  addBookmark(
    @Body() createBookmarkDto: CreateBookmarkDto,
    @AuthUser() userId: number,
  ) {
    return this.bookmarkService.addBookmark(createBookmarkDto, userId);
  }

  @Delete(':id')
  deleteBookmark(@Param('id', ParseIntPipe) id: number) {
    return this.bookmarkService.deleteBookmark(id);
  }
}
