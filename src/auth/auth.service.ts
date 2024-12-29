import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, name, documento, matricula } = registerDto;

    // Verificar si ya existe un usuario con el email, documento o matrícula
    const existingUser = await this.usersService.findByUniqueFields(email, documento, matricula);
    if (existingUser) {
      throw new UnauthorizedException('User already registered with this email, documento, or matricula');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.usersService.create({
      email,
      password: hashedPassword,
      name,
      documento,
      matricula,
    });

    return {
      user: newUser,
    };
  }

  async login(documento: string | undefined, matricula: string | undefined, password: string) {
    // Buscar usuario por documento o matrícula
    const user = await this.usersService.findByDocumentoOrMatricula(documento, matricula);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '1h',
    });

    return {
      user,
      access_token,
    };
  }

  // Método para verificar si el token ha expirado
  verifyTokenExpiration(token: string): boolean {
    try {
      // Intentamos decodificar el token para ver si es válido
      const decoded = this.jwtService.decode(token);
      
      if (!decoded) {
        throw new UnauthorizedException('Invalid token');
      }

      // Verificamos si el token ha expirado
      const expirationDate = decoded['exp'];
      const currentDate = Math.floor(Date.now() / 1000); // Obtener la fecha actual en segundos

      if (expirationDate < currentDate) {
        throw new UnauthorizedException('Token has expired');
      }

      return true;
    } catch (error) {
      throw new UnauthorizedException('Token has expired or is invalid');
    }
  }
}
