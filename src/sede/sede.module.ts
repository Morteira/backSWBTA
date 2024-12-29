import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sede } from './entities/sede.entity';
import { SedeService } from './sede.service';
import { SedeController } from './sede.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sede])],
  providers: [SedeService],
  controllers: [SedeController],
})
export class SedeModule {}
