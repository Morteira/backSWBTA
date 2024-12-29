import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facultad } from './entities/facultad.entity';
import { Campus } from '../campus/entities/campus.entity';
import { FacultadService } from './facultad.service';
import { FacultadController } from './facultad.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Facultad, Campus])],
  providers: [FacultadService],
  controllers: [FacultadController],
})
export class FacultadModule {}
