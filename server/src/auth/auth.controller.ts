import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post()
  signup() {
    return 'Signing up...';
  }

  @Post()
  signin() {
    return 'Signing in...';
  }
}
