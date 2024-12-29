import { IsEmail, IsNotEmpty, MinLength, IsString, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  documento: string;

  @IsNotEmpty()
  @IsString()
  matricula: string;
}

export class LoginDto {
  @IsOptional()
  @IsString()
  documento?: string;

  @IsOptional()
  @IsString()
  matricula?: string;

  @IsNotEmpty()
  password: string;
}
