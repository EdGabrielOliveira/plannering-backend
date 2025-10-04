import { Injectable } from '@nestjs/common';
import { CreateTrabalhoDto } from './dto/create-trabalho.dto';
import { UpdateTrabalhoDto } from './dto/update-trabalho.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TrabalhosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTrabalhoDto: CreateTrabalhoDto, usuarioId: string) {
    return this.prismaService.trabalho.create({
      data: {
        titulo: createTrabalhoDto.titulo,
        descricao: createTrabalhoDto.descricao,
        dataVencimento: createTrabalhoDto.dataVencimento
          ? new Date(createTrabalhoDto.dataVencimento)
          : null,
        prioridade: createTrabalhoDto.prioridade,
        status: createTrabalhoDto.status,
        usuarioId,
        materiaId: createTrabalhoDto.materiaId,
      },
      include: {
        materia: {
          select: {
            id: true,
            nome: true,
            cor: true,
          },
        },
      },
    });
  }

  async findAll(usuarioId: string) {
    return this.prismaService.trabalho.findMany({
      where: { usuarioId },
      include: {
        materia: {
          select: {
            id: true,
            nome: true,
            cor: true,
          },
        },
      },
      orderBy: {
        dataCriacao: 'desc',
      },
    });
  }

  async findOne(id: string, usuarioId: string) {
    return this.prismaService.trabalho.findFirst({
      where: { id, usuarioId },
      include: {
        materia: {
          select: {
            id: true,
            nome: true,
            cor: true,
          },
        },
      },
    });
  }

  async update(
    id: string,
    updateTrabalhoDto: UpdateTrabalhoDto,
    usuarioId: string,
  ) {
    return this.prismaService.trabalho.update({
      where: { id },
      data: {
        titulo: updateTrabalhoDto.titulo,
        descricao: updateTrabalhoDto.descricao,
        dataVencimento: updateTrabalhoDto.dataVencimento
          ? new Date(updateTrabalhoDto.dataVencimento)
          : undefined,
        prioridade: updateTrabalhoDto.prioridade,
        status: updateTrabalhoDto.status,
        materiaId: updateTrabalhoDto.materiaId,
      },
      include: {
        materia: {
          select: {
            id: true,
            nome: true,
            cor: true,
          },
        },
      },
    });
  }

  async remove(id: string, usuarioId: string) {
    return this.prismaService.trabalho.delete({
      where: { id },
    });
  }
}
