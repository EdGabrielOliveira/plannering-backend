import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MateriasService } from './materias.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { GetCurrentUserId } from 'src/decorators/get-current-user.decorator';

@Controller('materias')
export class MateriasController {
  constructor(private readonly materiasService: MateriasService) {}

  @Post()
  create(@GetCurrentUserId() @Body() createMateriaDto: CreateMateriaDto) {
    return this.materiasService.create(createMateriaDto);
  }

  @Get()
  findAll(@GetCurrentUserId() id: string) {
    return this.materiasService.findAll(id);
  }

  @Get(':id')
  findOne(@GetCurrentUserId() @Param('id') id: string) {
    return this.materiasService.findOne(id);
  }

  @Patch(':id')
  update(
    @GetCurrentUserId() @Param('id') id: string,
    @Body() updateMateriaDto: UpdateMateriaDto,
  ) {
    return this.materiasService.update(id, updateMateriaDto);
  }

  @Delete(':id')
  remove(@GetCurrentUserId() @Param('id') id: string) {
    return this.materiasService.remove(id);
  }
}
