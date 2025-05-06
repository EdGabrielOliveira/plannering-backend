import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createEventoDto: CreateEventoDto) {
    const evento = await this.prismaService.evento.create({
      data: {
        titulo: createEventoDto.titulo,
        descricao: createEventoDto.descricao,
        dataInicio: createEventoDto.dataInicio,
        dataFim: createEventoDto.dataFim,
        local: createEventoDto.local,
        diaInteiro: createEventoDto.diaInteiro,
        cor: createEventoDto.cor,
        usuarioId: createEventoDto.usuarioId,
      },
    });
    return evento;
  }

  findAll() {
    return this.prismaService.evento.findMany({});
  }

  findOne(id: string) {
    return this.prismaService.evento.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateEventoDto: UpdateEventoDto) {
    return this.prismaService.evento.update({
      where: {
        id: id,
      },
      data: updateEventoDto,
    });
  }

  remove(id: string) {
    return this.prismaService.evento.delete({
      where: { id },
    });
  }
}
