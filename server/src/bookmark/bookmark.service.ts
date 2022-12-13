import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  getBookmarks() {
    return 'Get bookmarks';
  }

  addBookmark() {
    return 'Add bookmark';
  }
}
