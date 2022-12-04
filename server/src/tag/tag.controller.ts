import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  getTags() {
    return this.tagService.getTags();
  }

  @Post()
  @UseGuards(AuthGuard())
  addTag() {
    return this.tagService.addTag();
  }
}
