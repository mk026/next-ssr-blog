import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.bookmarkRepository.findBy({ user: { id: userId } });
  }

  async addBookmark(createBookmarkDto: CreateBookmarkDto, userId: number) {
    const bookmark = this.bookmarkRepository.create({
      post: { id: createBookmarkDto.postId },
      user: { id: userId },
    });
    await this.bookmarkRepository.save(bookmark);
  }

  async deleteBookmark(id: number, userId: number) {
    const result = await this.bookmarkRepository.delete({
      id,
      user: { id: userId },
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Bookmark with id ${id} not found`);
    }
  }
}
