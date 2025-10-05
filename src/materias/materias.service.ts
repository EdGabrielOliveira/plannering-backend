import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MateriasService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createMateriaDto: CreateMateriaDto) {
    if (!createMateriaDto.usuarioId) {
      throw new Error('Usuario ID é obrigatório');
    }

    const materia = await this.prismaService.materia.create({
      data: {
        nome: createMateriaDto.nome,
        descricao: createMateriaDto.descricao,
        cor: createMateriaDto.cor,
        usuarioId: createMateriaDto.usuarioId,
      },
    });
    return materia;
  }

  findAll(usuarioId: string) {
    return this.prismaService.materia.findMany({
      where: { usuarioId },
      select: {
        id: true,
        nome: true,
        descricao: true,
        cor: true,
        dataCriacao: true,
        dataAtualizacao: true,
        usuarioId: true,
        tarefas: {
          select: {
            id: true,
            titulo: true,
            status: true,
            prioridade: true,
            dataVencimento: true,
          },
        },
        provas: {
          select: {
            id: true,
            titulo: true,
            data: true,
            status: true,
            nota: true,
          },
        },
        trabalhos: {
          select: {
            id: true,
            titulo: true,
            status: true,
            prioridade: true,
            dataVencimento: true,
          },
        },
        atividades: {
          select: {
            id: true,
            titulo: true,
            status: true,
            dataVencimento: true,
            nota: true,
          },
        },
      },
    });
  }

  findOne(id: string, usuarioId: string) {
    return this.prismaService.materia.findUnique({
      where: { id, usuarioId },
      select: {
        id: true,
        nome: true,
        descricao: true,
        cor: true,
        dataCriacao: true,
        dataAtualizacao: true,
        usuarioId: true,
        tarefas: {
          select: {
            id: true,
            titulo: true,
            status: true,
            prioridade: true,
            dataVencimento: true,
            dataCriacao: true,
          },
        },
        provas: {
          select: {
            id: true,
            titulo: true,
            data: true,
            status: true,
            nota: true,
            local: true,
          },
        },
        trabalhos: {
          select: {
            id: true,
            titulo: true,
            status: true,
            prioridade: true,
            dataVencimento: true,
            dataCriacao: true,
          },
        },
        atividades: {
          select: {
            id: true,
            titulo: true,
            status: true,
            dataVencimento: true,
            nota: true,
            dataCriacao: true,
          },
        },
      },
    });
  }

  update(id: string, usuarioId: string, updateMateriaDto: UpdateMateriaDto) {
    return this.prismaService.materia.update({
      where: {
        id,
        usuarioId,
      },
      data: updateMateriaDto,
    });
  }

  remove(id: string, usuarioId: string) {
    return this.prismaService.materia.delete({
      where: { id, usuarioId },
    });
  }
}
