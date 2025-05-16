import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TarefasService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTarefaDto: CreateTarefaDto) {
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

  findAll(id: string) {
    return this.prismaService.tarefa.findMany({
      where: { id },
      include: {
        materia: true,
        usuario: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.tarefa.findUnique({
      where: { id },
    });
  }

  update(id: string, updateTarefaDto: UpdateTarefaDto) {
    return this.prismaService.tarefa.update({
      where: {
        id,
      },
      data: updateTarefaDto,
    });
  }

  remove(id: string) {
    return this.prismaService.tarefa.delete({
      where: { id },
    });
  }
}
