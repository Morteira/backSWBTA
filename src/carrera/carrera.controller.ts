import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { CreateCarreraDto } from './dto/create-carrera.dto';

@Controller('carrera')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Get()
  async findAll() {
    return this.carreraService.findAll();
  }

  @Post()
  async create(@Body() createCarreraDto: CreateCarreraDto) {
    return this.carreraService.create(createCarreraDto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCarreraDto: UpdateCarreraDto) {
    return this.carreraService.update(id, updateCarreraDto);
  }
}
