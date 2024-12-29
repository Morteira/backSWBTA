import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateCarreraDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsNumber()
  facultadId?: number;
}
