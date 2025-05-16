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
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { GetCurrentUserId } from 'src/decorators/get-current-user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard'; // Certifique-se que o caminho está correto

@Controller('eventos')
@UseGuards(JwtAuthGuard) // Adicione o guard para proteger todas as rotas
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post()
  create(
    @Body() createEventoDto: CreateEventoDto,
    @GetCurrentUserId() userId: string,
  ) {
    return this.eventosService.create(createEventoDto, userId);
  }

  @Get()
  findAll(@GetCurrentUserId() userId: string) {
    return this.eventosService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetCurrentUserId() userId: string) {
    return this.eventosService.findOne(id, userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventoDto: UpdateEventoDto,
    @GetCurrentUserId() userId: string,
  ) {
    return this.eventosService.update(id, updateEventoDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetCurrentUserId() userId: string) {
    return this.eventosService.remove(id, userId);
  }
}
