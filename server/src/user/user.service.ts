import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { SignupCredentialsDto } from 'src/auth/dto/signup-credentials.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
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

  async addUser(signupCredentialsDto: SignupCredentialsDto) {
    const user = this.userRepository.create(signupCredentialsDto);
    await this.userRepository.save(user);
  }

  updateUser() {
    return 'Update user';
  }

  deleteUser(id: number) {
    return `Deleting user with id ${id}`;
  }
}
