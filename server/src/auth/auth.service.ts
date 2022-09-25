import { Injectable, UnauthorizedException } from '@nestjs/common';
import bcryptjs from 'bcryptjs';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';

export interface AuthResponse {
  user: Pick<User, 'name' | 'email'>;
}

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signup(
    signupCredentialsDto: SignupCredentialsDto,
  ): Promise<AuthResponse> {
    const user = await this.userService.addUser(signupCredentialsDto);
    return { user: { name: user.name, email: user.email } };
  }

  async signin(
    signinCredentialsDto: SigninCredentialsDto,
  ): Promise<AuthResponse> {
    const { email, password } = signinCredentialsDto;
    const foundUser = await this.userService.getUserByEmail(email);
    if (!foundUser) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    const isPasswordValid = bcryptjs.compareSync(password, foundUser.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    return { user: { name: foundUser.name, email: foundUser.email } };
  }
}
