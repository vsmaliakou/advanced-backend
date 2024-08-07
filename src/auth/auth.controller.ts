import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Авторизация' })
  @ApiResponse({ status: 200 })
  @Post('/login')
  login(@Body() dto: CreateUserDto) {
    return this.authService.login(dto);
  }

  @ApiOperation({ summary: 'Регистрация' })
  @ApiResponse({ status: 200 })
  @Post('/registration')
  registration(@Body() dto: CreateUserDto) {
    return this.authService.registration(dto);
  }
}
