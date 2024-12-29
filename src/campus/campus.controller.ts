import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CampusService } from './campus.service';
import { CreateCampusDto } from './dto/create-campus.dto';
import { UpdateCampusDto } from './dto/update-campus.dto';

@Controller('campus')
export class CampusController {
  constructor(private readonly campusService: CampusService) {}

  @Get()
  findAll() {
    return this.campusService.findAll();
  }

  @Post()
  create(@Body() createCampusDto: CreateCampusDto) {
    return this.campusService.create(createCampusDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCampusDto: UpdateCampusDto) {
    return this.campusService.update(id, updateCampusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.campusService.remove(id);
  }
}
