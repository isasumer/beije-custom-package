import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { EmailService } from '../email/email.service';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly emailService: EmailService,
    private readonly configService: ConfigService
  ) {}

  async register(dto: RegisterDto): Promise<void> {
    const existing = await this.userRepository.findOne({ where: { username: dto.username } });
    if (existing) {
      throw new BadRequestException('username already exists');
    }

    const verificationToken = this.generateVerificationToken(32);

    const user = this.userRepository.create({
      username: dto.username,
      email: dto.email,
      verificationToken,
      isVerified: false,
    });
    await this.userRepository.save(user);

    const baseUrl = this.configService.get<string>('app.baseUrl') || 'http://localhost:3001';
    await this.emailService.sendVerificationEmail(dto.email, dto.username, verificationToken, baseUrl);
  }

  async verifyEmail(username: string, token: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    if (user.verificationToken !== token) {
      throw new BadRequestException('invalid verification token');
    }

    user.isVerified = true;
    await this.userRepository.save(user);
  }

  async checkVerification(username: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user.isVerified === true;
  }

  private generateVerificationToken(length: number): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const bytes = randomBytes(length);
    let token = '';
    for (let i = 0; i < length; i++) {
      token += charset[bytes[i] % charset.length];
    }
    return token;
  }
}


