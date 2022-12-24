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

import { AuthUser } from '../common/decorators/auth-user.decorator';
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
  updateUser(@Body() updateUserDto: UpdateUserDto, @AuthUser() userId: number) {
    return this.userService.updateUser(userId, updateUserDto);
  }

  @Put('/password')
  @UseGuards(AuthGuard())
  updatePassword(
    @Body() updatePasswordDto: UpdatePasswordDto,
    @AuthUser() userId: number,
  ) {
    return this.userService.updatePassword(userId, updatePasswordDto);
  }

  @Delete()
  @UseGuards(AuthGuard())
  deleteUser(@AuthUser() userId: number) {
    return this.userService.deleteUser(userId);
  }
}
