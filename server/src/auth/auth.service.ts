import { Injectable } from '@nestjs/common';
import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';

@Injectable()
export class AuthService {
  signup(signupCredentialsDto: SignupCredentialsDto) {
    return `Signing up ${signupCredentialsDto.name}...`;
  }

  signin(signinCredentialsDto: SigninCredentialsDto) {
    return `Signing in ${signinCredentialsDto.email}...`;
  }
}
