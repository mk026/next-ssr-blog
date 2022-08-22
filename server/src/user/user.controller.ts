import { Controller, Delete, Get, Put } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUsers() {
    return 'Get all users';
  }

  @Get()
  getUser() {
    return 'Get single user';
  }

  @Put()
  updateUser() {
    return 'Update user';
  }

  @Delete()
  deleteUser() {
    return 'Delete user';
  }
}
