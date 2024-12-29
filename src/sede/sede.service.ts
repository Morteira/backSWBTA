import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sede } from './entities/sede.entity';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';

@Injectable()
export class SedeService {
  constructor(
    @InjectRepository(Sede)
    private sedeRepository: Repository<Sede>,
  ) {}

  findAll() {
    return this.sedeRepository.find();
  }

  create(createSedeDto: CreateSedeDto) {
    const sede = this.sedeRepository.create(createSedeDto);
    return this.sedeRepository.save(sede);
  }

  async update(id: number, updateSedeDto: UpdateSedeDto) {
    await this.sedeRepository.update(id, updateSedeDto);
    return this.sedeRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.sedeRepository.delete(id);
  }
}
