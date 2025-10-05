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
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { GetCurrentUserId } from '../decorators/get-current-user.decorator';
import { ApiKeyGuard, ApiKeyType, API_KEY_TYPES } from '../auth/api-key.guard';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('eventos')
@UseGuards(ApiKeyGuard, JwtAuthGuard)
@SetMetadata(API_KEY_TYPES, [ApiKeyType.ANY])
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post()
  create(
    @GetCurrentUserId() usuarioId: string,
    @Body() createEventoDto: CreateEventoDto,
  ) {
    return this.eventosService.create({ ...createEventoDto, usuarioId });
  }

  @Get()
  findAll(@GetCurrentUserId() usuarioId: string) {
    return this.eventosService.findAll(usuarioId);
  }

  @Get(':id')
  findOne(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.eventosService.findOne(usuarioId, id);
  }

  @Patch(':id')
  update(
    @GetCurrentUserId() usuarioId: string,
    @Param('id') id: string,
    @Body() updateEventoDto: UpdateEventoDto,
  ) {
    return this.eventosService.update(usuarioId, id, updateEventoDto);
  }

  @Delete(':id')
  remove(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.eventosService.remove(id, usuarioId);
  }
}
