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

  findAll(usuarioId: string) {
    return this.prismaService.evento.findMany({
      where: { usuarioId },
    });
  }

  findOne(id: string, usuarioId: string) {
    return this.prismaService.evento.findUnique({
      where: {
        id,
        usuarioId,
      },
    });
  }

  update(id: string, usuarioId: string, updateEventoDto: UpdateEventoDto) {
    return this.prismaService.evento.update({
      where: {
        id,
        usuarioId,
      },
      data: updateEventoDto,
    });
  }

  remove(id: string, usuarioId: string) {
    return this.prismaService.evento.delete({
      where: { id, usuarioId },
    });
  }
}
