import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ApiKeyGuard, ApiKeyType, API_KEY_TYPES } from './api-key.guard';

@Controller('auth')
@UseGuards(ApiKeyGuard)
@SetMetadata(API_KEY_TYPES, [ApiKeyType.ANY])
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    const result = await this.authService.login(loginDto);
    return {
      access_token: result.access_token,
      refresh_token: result.refresh_token,
      user: {
        id: result.user.id,
        nome: result.user.nome,
        email: result.user.email,
      },
    };
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshTokens(refreshTokenDto.refresh_token);
  }

  @Post('revoke')
  @HttpCode(HttpStatus.OK)
  async revokeRefreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    await this.authService.revokeRefreshToken(refreshTokenDto.refresh_token);
    return { message: 'Refresh token revogado com sucesso' };
  }
}
