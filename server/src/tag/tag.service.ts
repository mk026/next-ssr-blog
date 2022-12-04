import { Injectable } from '@nestjs/common';

import { CreateTagDto } from './dto/create-tag.dto';

@Injectable()
export class TagService {
  getTags() {
    return 'Get tags';
  }

  addTag(createTagDto: CreateTagDto) {
    return `Create tag: ${createTagDto.title}`;
  }
}
