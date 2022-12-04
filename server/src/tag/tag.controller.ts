import { Controller, Get, Post } from '@nestjs/common';

import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  getTags() {
    return this.tagService.getTags();
  }

  @Post()
  addTag() {
    return this.tagService.addTag();
  }
}
