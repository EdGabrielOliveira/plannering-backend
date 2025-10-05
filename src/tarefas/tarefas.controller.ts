import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { GetCurrentUserId } from '../decorators/get-current-user.decorator';
import { ApiKeyGuard, ApiKeyType, API_KEY_TYPES } from '../auth/api-key.guard';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('tarefas')
@UseGuards(ApiKeyGuard, JwtAuthGuard)
@SetMetadata(API_KEY_TYPES, [ApiKeyType.ANY])
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Post()
  create(
    @GetCurrentUserId() usuarioId: string,
    @Body() createTarefaDto: CreateTarefaDto,
  ) {
    return this.tarefasService.create({ ...createTarefaDto, usuarioId });
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
