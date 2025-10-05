import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TarefasService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTarefaDto: CreateTarefaDto) {
    if (!createTarefaDto.usuarioId) {
      throw new Error('usuarioId é obrigatório');
    }

    const tarefa = await this.prismaService.tarefa.create({
      data: {
        titulo: createTarefaDto.titulo,
        descricao: createTarefaDto.descricao,
        status: createTarefaDto.status,
        materiaId: createTarefaDto.materiaId,
        usuarioId: createTarefaDto.usuarioId,
        prioridade: createTarefaDto.prioridade,
        dataVencimento: createTarefaDto.dataVencimento,
      },
    });
    return tarefa;
  }

  findAll(usuarioId: string) {
    return this.prismaService.tarefa.findMany({
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

  findOne(id: string, usuarioId: string) {
    return this.prismaService.tarefa.findUnique({
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

  update(id: string, usuarioId: string, updateTarefaDto: UpdateTarefaDto) {
    return this.prismaService.tarefa.update({
      where: {
        id,
        usuarioId,
      },
      data: updateTarefaDto,
    });
  }

  remove(id: string, usuarioId: string) {
    return this.prismaService.tarefa.delete({
      where: { id, usuarioId },
    });
  }
}
