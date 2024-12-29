import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { FacultadService } from './facultad.service';
import { CreateFacultadDto } from './dto/create-facultad.dto';
import { UpdateFacultadDto } from './dto/update-facultad.dto';

@Controller('facultad')
export class FacultadController {
  constructor(private readonly facultadService: FacultadService) {}

  @Get()
  async findAll() {
    console.log("get")
    return this.facultadService.findAll();
  }

  @Post()
  async create(@Body() createFacultadDto: CreateFacultadDto) {
    return this.facultadService.create(createFacultadDto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateFacultadDto: UpdateFacultadDto) {
    return this.facultadService.update(id, updateFacultadDto);
  }
}
