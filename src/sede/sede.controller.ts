import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SedeService } from './sede.service';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';

@Controller('sede')
export class SedeController {
  constructor(private readonly sedeService: SedeService) {}

  @Get()
  findAll() {
    return this.sedeService.findAll();
  }

  @Post()
  create(@Body() createSedeDto: CreateSedeDto) {
    return this.sedeService.create(createSedeDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateSedeDto: UpdateSedeDto) {
    return this.sedeService.update(id, updateSedeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sedeService.remove(id);
  }
}
