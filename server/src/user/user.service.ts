import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return 'Get all users';
  }

  getUser(id: number) {
    return `Get user with id ${id}`;
  }

  updateUser() {
    return 'Update user';
  }

  deleteUser(id: number) {
    return `Deleting user with id ${id}`;
  }
}
