import { Injectable } from '@nestjs/common';
import { CreateProvaDto } from './dto/create-prova.dto';
import { UpdateProvaDto } from './dto/update-prova.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProvasService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProvaDto: CreateProvaDto) {
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

  findAll(id: string) {
    return this.prismaService.prova.findMany({
      where: { id },
      include: {
        materia: true,
        usuario: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.prova.findUnique({
      where: { id },
      include: {
        materia: true,
        usuario: true,
      },
    });
  }

  update(id: string, updateProvaDto: UpdateProvaDto) {
    return this.prismaService.prova.update({
      where: {
        id,
      },
      data: updateProvaDto,
    });
  }

  remove(id: string) {
    return this.prismaService.prova.delete({
      where: { id },
    });
  }
}
