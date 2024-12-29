import { Controller, Post, Get, Headers, UnauthorizedException, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { documento, matricula, password } = loginDto;

    // Lógica para permitir login con documento o matrícula
    if (!documento && !matricula) {
      throw new UnauthorizedException('Either documento or matricula must be provided');
    }

    return this.authService.login(documento, matricula, password);
  }

  // Endpoint para verificar la expiración del token
  @Get('verify-token')
  async verifyToken(@Headers('authorization') token: string) {
    if (!token) {
      throw new UnauthorizedException('Token is required');
    }

    // Eliminar el prefijo 'Bearer ' del token
    const tokenWithoutBearer = token.split(' ')[1];

    // Verificar si el token es válido y no ha expirado
    const isValid = this.authService.verifyTokenExpiration(tokenWithoutBearer);

    return {
      message: isValid ? 'Token is valid and not expired' : 'Token is invalid or expired',
    };
  }
}
