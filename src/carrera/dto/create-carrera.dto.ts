import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateCarreraDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsNumber()
  facultadId?: number;
}
