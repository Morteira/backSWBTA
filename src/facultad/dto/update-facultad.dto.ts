import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateFacultadDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsNumber()
  campusId?: number;
}
