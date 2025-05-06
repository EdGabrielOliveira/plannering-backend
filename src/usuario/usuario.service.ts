import { Injectable } from '@nestjs/common';
import { CriarUsuarioDTO } from './dto/create-usuario.dto';
import { AtualizarUsuarioDTO } from './dto/update-usuario.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(CriarUsuarioDTO: CriarUsuarioDTO) {
    const usuario = await this.prismaService.usuario.create({
      data: {
        nome: CriarUsuarioDTO.nome,
        email: CriarUsuarioDTO.email,
        senha: CriarUsuarioDTO.senha,
        telefone: CriarUsuarioDTO.telefone,
      },
    });

    return usuario;
  }

  finfdAll() {
    return this.prismaService.usuario.findMany({
      include: {
        atividades: true,
        provas: true,
        tarefas: true,
        materias: true,
        eventos: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.usuario.findUnique({
      where: { id },
      include: {
        atividades: true,
        provas: true,
        tarefas: true,
        materias: true,
        eventos: true,
      },
    });
  }

  update(id: string, AtualizarUsuarioDTO: AtualizarUsuarioDTO) {
    return this.prismaService.usuario.update({
      where: {
        id,
      },
      data: AtualizarUsuarioDTO,
    });
  }

  remove(id: string) {
    return this.prismaService.usuario.delete({
      where: { id },
    });
  }
}
