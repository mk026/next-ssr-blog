import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  getTags() {
    return 'Get tags';
  }

  addTag() {
    return 'Create tag';
  }
}
