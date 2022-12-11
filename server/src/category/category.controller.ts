import { Controller, Get, Post } from '@nestjs/common';

import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Post()
  addCategory() {
    return this.categoryService.addCategory();
  }
}
