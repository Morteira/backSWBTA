import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campus } from './entities/campus.entity';
import { Sede } from '../sede/entities/sede.entity';
import { CampusService } from './campus.service';
import { CampusController } from './campus.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Campus, Sede])],
  providers: [CampusService],
  controllers: [CampusController],
})
export class CampusModule {}
