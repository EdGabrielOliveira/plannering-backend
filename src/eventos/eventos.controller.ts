import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { GetCurrentUserId } from 'src/decorators/get-current-user.decorator';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post()
  create(@GetCurrentUserId() @Body() createEventoDto: CreateEventoDto) {
    return this.eventosService.create(createEventoDto);
  }

  @Get()
  findAll(@GetCurrentUserId() id: string) {
    return this.eventosService.findAll(id);
  }

  @Get(':id')
  findOne(@GetCurrentUserId() @Param('id') id: string) {
    return this.eventosService.findOne(id);
  }

  @Patch(':id')
  update(
    @GetCurrentUserId() @Param('id') id: string,
    @Body() updateEventoDto: UpdateEventoDto,
  ) {
    return this.eventosService.update(id, updateEventoDto);
  }

  @Delete(':id')
  remove(@GetCurrentUserId() @Param('id') id: string) {
    return this.eventosService.remove(id);
  }
}
