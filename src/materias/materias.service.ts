import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MateriasService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createMateriaDto: CreateMateriaDto) {
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
      include: {
        usuario: true,
        tarefas: true,
        provas: true,
      },
    });
  }

  findOne(id: string, usuarioId: string) {
    return this.prismaService.materia.findUnique({
      where: { id, usuarioId },
      include: {
        usuario: true,
        tarefas: true,
        provas: true,
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
