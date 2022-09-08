import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from 'src/dto/auth.dto';
import { brotliDecompressSync } from 'zlib';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('user/:id')
  getHello(@Param('id') user_id: number) {
    console.log(user_id);
    return this.authService.getID(user_id);
  }

  @Post('signup')
  signUp(@Body() dto: AuthDTO) {
    return this.authService.signUp(dto);
  }

  @Get('users')
  getAllUsers() {
    return this.authService.getAllUser();
  }
}
