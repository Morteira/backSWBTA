import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from './entities/carrera.entity';
import { Facultad } from '../facultad/entities/facultad.entity';
import { CarreraService } from './carrera.service';
import { CarreraController } from './carrera.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Carrera, Facultad])],
  providers: [CarreraService],
  controllers: [CarreraController],
})
export class CarreraModule {}
