import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignupCredentialsDto } from '../auth/dto/signup-credentials.dto';
import { AuthService } from '../auth/auth.service';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthService,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  async getUser(id: number) {
    const found = await this.userRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return found;
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async createUser(signupCredentialsDto: SignupCredentialsDto) {
    const foundUser = await this.userRepository.findOne({
      where: { email: signupCredentialsDto.email },
    });
    if (foundUser) {
      throw new ConflictException('Email already in use');
    }
    const passwordHash = this.authService.hashPassword(
      signupCredentialsDto.password,
    );
    const user = this.userRepository.create({
      ...signupCredentialsDto,
      password: passwordHash,
    });
    await this.userRepository.save(user);
    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const result = await this.userRepository.update(id, updateUserDto);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  async updatePassword(id: number, updatePasswordDto: UpdatePasswordDto) {
    return `Update password for user with id ${id}`;
  }

  async deleteUser(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
