import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTagDto } from './dto/create-tag.dto';

import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  getTags() {
    return this.tagService.getTags();
  }

  @Get('popular')
  getPopularTags() {
    return this.tagService.getPopularTags();
  }

  @Post()
  @UseGuards(AuthGuard())
  addTag(@Body() createTagDto: CreateTagDto) {
    return this.tagService.addTag(createTagDto);
  }
}
