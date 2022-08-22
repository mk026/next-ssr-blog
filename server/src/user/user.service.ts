import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return 'Get all users';
  }

  getUser() {
    return 'Get single user';
  }

  updateUser() {
    return 'Update user';
  }

  deleteUser() {
    return 'Delete user';
  }
}
