import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createEventoDto: CreateEventoDto, userId: string) {
    const evento = await this.prismaService.evento.create({
      data: {
        titulo: createEventoDto.titulo,
        descricao: createEventoDto.descricao,
        dataInicio: createEventoDto.dataInicio,
        dataFim: createEventoDto.dataFim,
        local: createEventoDto.local,
        diaInteiro: createEventoDto.diaInteiro,
        cor: createEventoDto.cor,
        usuarioId: userId,
      },
    });
    return evento;
  }

  findAll(userId: string) {
    return this.prismaService.evento.findMany({
      where: { usuarioId: userId },
    });
  }

  findOne(id: string, userId: string) {
    return this.prismaService.evento.findUnique({
      where: {
        id: id,
        usuarioId: userId,
      },
    });
  }

  update(id: string, updateEventoDto: UpdateEventoDto, userId: string) {
    return this.prismaService.evento.update({
      where: {
        id: id,
        usuarioId: userId,
      },
      data: updateEventoDto,
    });
  }

  remove(id: string, userId: string) {
    return this.prismaService.evento.delete({
      where: {
        id,
        usuarioId: userId,
      },
    });
  }
}
