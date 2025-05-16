import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MateriasService } from './materias.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { GetCurrentUserId } from 'src/decorators/get-current-user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('materias')
@UseGuards(JwtAuthGuard)
export class MateriasController {
  constructor(private readonly materiasService: MateriasService) {}

  @Post()
  create(@GetCurrentUserId() @Body() createMateriaDto: CreateMateriaDto) {
    return this.materiasService.create(createMateriaDto);
  }

  @Get()
  findAll(@GetCurrentUserId() usuarioId: string) {
    return this.materiasService.findAll(usuarioId);
  }

  @Get(':id')
  findOne(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.materiasService.findOne(id, usuarioId);
  }

  @Patch(':id')
  update(
    @GetCurrentUserId() usuarioId: string,
    @Param('id') id: string,
    @Body() updateMateriaDto: UpdateMateriaDto,
  ) {
    return this.materiasService.update(id, usuarioId, updateMateriaDto);
  }

  @Delete(':id')
  remove(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.materiasService.remove(id, usuarioId);
  }
}
