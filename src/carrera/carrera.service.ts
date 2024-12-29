import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from './entities/carrera.entity';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { Facultad } from '../facultad/entities/facultad.entity';

@Injectable()
export class CarreraService {
  constructor(
    @InjectRepository(Carrera)
    private readonly carreraRepository: Repository<Carrera>,
  ) {}

  async findAll(): Promise<Carrera[]> {
    return this.carreraRepository.find({ relations: ['facultad'] });
  }

  async create(createCarreraDto: CreateCarreraDto): Promise<Carrera> {
    const carrera = this.carreraRepository.create({
      ...createCarreraDto,
      facultad: { id: createCarreraDto.facultadId } as Facultad,
    });
    return this.carreraRepository.save(carrera);
  }

  async update(id: number, updateCarreraDto: UpdateCarreraDto): Promise<Carrera> {
    await this.carreraRepository.update(id, {
      ...updateCarreraDto,
      facultad: updateCarreraDto.facultadId
        ? { id: updateCarreraDto.facultadId } as Facultad
        : undefined,
    });
    return this.carreraRepository.findOne({ where: { id }, relations: ['facultad'] });
  }
}
