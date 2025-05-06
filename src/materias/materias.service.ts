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

  findAll() {
    return this.prismaService.materia.findMany({
      include: {
        usuario: true,
        tarefas: true,
        provas: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.materia.findUnique({
      where: { id },
      include: {
        usuario: true,
        tarefas: true,
        provas: true,
      },
    });
  }

  update(id: string, updateMateriaDto: UpdateMateriaDto) {
    return this.prismaService.materia.update({
      where: {
        id,
      },
      data: updateMateriaDto,
    });
  }

  remove(id: string) {
    return this.prismaService.materia.delete({
      where: { id },
    });
  }
}
