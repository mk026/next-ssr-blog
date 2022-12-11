import { Injectable } from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  getCategories() {
    return 'Get categories';
  }

  addCategory(createCategoryDto: CreateCategoryDto) {
    return `Add category: ${createCategoryDto.title}`;
  }
}
