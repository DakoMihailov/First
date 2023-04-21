// Service - Users
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { CreateUserInput } from './dto/create-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { PayloadType } from './interface/users.interface';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: MongoRepository<User>,

    private jwtService: JwtService,
  ) {}

  // Login
  async login(loginInput: LoginUserInput): Promise<User> {
    const { email, password } = loginInput;

    const user = await this.usersRepository.findOneBy({ email });

    if (!user) {
      throw new BadRequestException('No User found...');
    }

    // Validate password
    const passwordMatch = await bcrypt.compare(password, user?.password);

    if (!passwordMatch) {
      throw new BadRequestException('Invalid credentials...');
    }

    const token = this.jwtService.sign({ email });

    delete user.password;

    return { ...user, token };
  }

  // Singup
  async signup(signupInput: CreateUserInput): Promise<User> {
    const { email, password } = signupInput;

    // Check if user exists
    const user = await this.usersRepository.findOneBy({ email });

    if (user) {
      throw new BadRequestException('User Already Exists');
    }

    // Encrypt Password
    const hashedPassword = await bcrypt.hash(password.toString(), 12);

    signupInput.password = hashedPassword;

    const createUser = await this.usersRepository.save(signupInput);
    return createUser;
  }

  async findBy(args: Record<string, string>): Promise<User> {
    const user = await this.usersRepository.findOneBy(args);
    return user;
  }

  // Get User
  async getUser(token): Promise<User> {
    const decodedJwt = this.jwtService.decode(token) as PayloadType;

    if (!decodedJwt) {
      throw new UnauthorizedException();
    }

    const user = await this.usersRepository.findOneBy({
      email: decodedJwt?.email,
    });
    delete user.password;
    return user;
  }
}
