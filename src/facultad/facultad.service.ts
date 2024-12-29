import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Facultad } from './entities/facultad.entity';
import { CreateFacultadDto } from './dto/create-facultad.dto';
import { UpdateFacultadDto } from './dto/update-facultad.dto';

@Injectable()
export class FacultadService {
  constructor(
    @InjectRepository(Facultad)
    private readonly facultadRepository: Repository<Facultad>,
  ) {}

  async findAll(): Promise<Facultad[]> {
    return this.facultadRepository.find({ relations: ['carreras'] });
  }

  async create(createFacultadDto: CreateFacultadDto): Promise<Facultad> {
    const facultad = this.facultadRepository.create(createFacultadDto);
    return this.facultadRepository.save(facultad);
  }

  async update(id: number, updateFacultadDto: UpdateFacultadDto): Promise<Facultad> {
    await this.facultadRepository.update(id, updateFacultadDto);
    return this.facultadRepository.findOne({ where: { id } });
  }
}
