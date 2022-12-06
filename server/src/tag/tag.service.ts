import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) {}

  getTags() {
    return 'Get tags';
  }

  addTag(createTagDto: CreateTagDto) {
    return `Create tag: ${createTagDto.title}`;
  }
}
