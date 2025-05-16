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
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { GetCurrentUserId } from 'src/decorators/get-current-user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('tarefas')
@UseGuards(JwtAuthGuard)
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Post()
  create(@GetCurrentUserId() @Body() createTarefaDto: CreateTarefaDto) {
    return this.tarefasService.create(createTarefaDto);
  }

  @Get()
  findAll(@GetCurrentUserId() usuarioId: string) {
    return this.tarefasService.findAll(usuarioId);
  }

  @Get(':id')
  findOne(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.tarefasService.findOne(id, usuarioId);
  }

  @Patch(':id')
  update(
    @GetCurrentUserId() usuarioId: string,
    @Param('id') id: string,
    @Body() updateTarefaDto: UpdateTarefaDto,
  ) {
    return this.tarefasService.update(id, usuarioId, updateTarefaDto);
  }

  @Delete(':id')
  remove(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.tarefasService.remove(id, usuarioId);
  }
}
