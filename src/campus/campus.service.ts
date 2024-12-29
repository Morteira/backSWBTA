import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campus } from './entities/campus.entity';
import { CreateCampusDto } from './dto/create-campus.dto';
import { UpdateCampusDto } from './dto/update-campus.dto';

@Injectable()
export class CampusService {
  constructor(
    @InjectRepository(Campus)
    private campusRepository: Repository<Campus>,
  ) {}

  findAll() {
    return this.campusRepository.find({ relations: ['sede'] });
  }

  create(createCampusDto: CreateCampusDto) {
    const campus = this.campusRepository.create({
      ...createCampusDto,
      sede: { id: createCampusDto.sedeId },
    });
    return this.campusRepository.save(campus);
  }

  async update(id: number, updateCampusDto: UpdateCampusDto) {
    // Busca el campus existente
    const existingCampus = await this.campusRepository.findOne({ where: { id } });
    if (!existingCampus) {
      throw new Error('Campus not found'); // Maneja el caso de campus no existente
    }
  
    // Crea el objeto actualizado para la entidad
    const updatedCampus = {
      ...existingCampus,
      ...updateCampusDto,
      sede: updateCampusDto.sedeId ? { id: updateCampusDto.sedeId } : existingCampus.sede,
    };
  
    // Guarda los cambios
    await this.campusRepository.save(updatedCampus);
  
    // Retorna el campus actualizado
    return this.campusRepository.findOne({
      where: { id },
      relations: ['sede'], // Incluye relaciones si es necesario
    });
  }
  

  remove(id: number) {
    return this.campusRepository.delete(id);
  }
}
