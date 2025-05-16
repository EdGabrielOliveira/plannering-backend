import { Injectable } from '@nestjs/common';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AtividadesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAtividadeDto: CreateAtividadeDto) {
    const atividade = await this.prismaService.atividade.create({
      data: {
        titulo: createAtividadeDto.titulo,
        descricao: createAtividadeDto.descricao,
        status: createAtividadeDto.status,
        materiaId: createAtividadeDto.materiaId,
        usuarioId: createAtividadeDto.usuarioId,
        dataVencimento: createAtividadeDto.dataVencimento,
        peso: createAtividadeDto.peso,
        nota: createAtividadeDto.nota,
      },
    });
    return atividade;
  }

  findAll(usuarioId: string) {
    return this.prismaService.atividade.findMany({
      where: { usuarioId },
      include: {
        materia: true,
        usuario: true,
      },
    });
  }

  findOne(id: string, usuarioId: string) {
    return this.prismaService.atividade.findUnique({
      where: { usuarioId, id },
      include: {
        materia: true,
        usuario: true,
      },
    });
  }

  update(
    id: string,
    usuarioId: string,
    updateAtividadeDto: UpdateAtividadeDto,
  ) {
    return this.prismaService.atividade.update({
      where: {
        id,
        usuarioId,
      },
      data: updateAtividadeDto,
    });
  }

  remove(id: string, usuarioId: string) {
    return this.prismaService.atividade.delete({
      where: {
        id,
        usuarioId,
      },
    });
  }
}
