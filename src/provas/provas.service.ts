import { Injectable } from '@nestjs/common';
import { CreateProvaDto } from './dto/create-prova.dto';
import { UpdateProvaDto } from './dto/update-prova.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProvasService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProvaDto: CreateProvaDto) {
    if (!createProvaDto.usuarioId) {
      throw new Error('Usuario ID é obrigatório');
    }

    const prova = await this.prismaService.prova.create({
      data: {
        titulo: createProvaDto.titulo,
        descricao: createProvaDto.descricao,
        nota: createProvaDto.nota,
        status: createProvaDto.status,
        materiaId: createProvaDto.materiaId,
        usuarioId: createProvaDto.usuarioId,
        local: createProvaDto.local,
        data: createProvaDto.data,
      },
    });
    return prova;
  }

  findAll(usuarioId: string) {
    return this.prismaService.prova.findMany({
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
        data: 'asc',
      },
    });
  }

  findOne(id: string, usuarioId: string) {
    return this.prismaService.prova.findUnique({
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

  update(id: string, usuarioId: string, updateProvaDto: UpdateProvaDto) {
    return this.prismaService.prova.update({
      where: {
        id,
        usuarioId,
      },
      data: updateProvaDto,
    });
  }

  remove(id: string, usuarioId: string) {
    return this.prismaService.prova.delete({
      where: { id, usuarioId },
    });
  }
}
