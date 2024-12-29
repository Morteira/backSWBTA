import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateFacultadDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsNumber()
  campusId?: number;
}
