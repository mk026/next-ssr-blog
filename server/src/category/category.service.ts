import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getCategories() {
    return 'Get categories';
  }

  addCategory() {
    return 'Add category';
  }
}
