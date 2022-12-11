import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  getCategories() {
    return 'Get categories';
  }

  addCategory(createCategoryDto: CreateCategoryDto) {
    return `Add category: ${createCategoryDto.title}`;
  }
}
