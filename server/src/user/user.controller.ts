import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Post()
  addUser() {
    return this.userService.addUser();
  }

  @Put()
  updateUser() {
    return this.userService.updateUser();
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
