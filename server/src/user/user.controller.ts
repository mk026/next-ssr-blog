import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { GetUser } from '../auth/get-user.decorator';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Put()
  @UseGuards(AuthGuard())
  updateUser(@Body() updateUserDto: UpdateUserDto, @GetUser() userId: number) {
    return this.userService.updateUser(userId, updateUserDto);
  }

  @Put('/password')
  @UseGuards(AuthGuard())
  updatePassword(
    @Body() updatePasswordDto: UpdatePasswordDto,
    @GetUser() userId: number,
  ) {
    return this.userService.updatePassword(userId, updatePasswordDto);
  }

  @Delete()
  @UseGuards(AuthGuard())
  deleteUser(@GetUser() userId: number) {
    return this.userService.deleteUser(userId);
  }
}
