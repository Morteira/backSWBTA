import { IsInt, IsString } from 'class-validator';

export class CreateCampusDto {
  @IsString()
  nombre: string;

  @IsInt()
  sedeId: number;
}
