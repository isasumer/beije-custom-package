import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    await this.userService.register(body);
    return { message: 'registration success, check your email for verification link' };
  }

  @Get('verify-email/:username/:verificationToken')
  async verifyEmail(
    @Param('username') username: string,
    @Param('verificationToken') token: string
  ) {
    await this.userService.verifyEmail(username, token);
    return { message: 'email verified successfully' };
  }

  @Get('check-verification/:username')
  async checkVerification(@Param('username') username: string) {
    const verified = await this.userService.checkVerification(username);
    return { message: verified ? 'user is verified' : 'user is not verified' };
  }
}


