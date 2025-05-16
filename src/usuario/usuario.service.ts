import { ConflictException, Injectable } from '@nestjs/common';
import { CriarUsuarioDTO } from './dto/create-usuario.dto';
import { AtualizarUsuarioDTO } from './dto/update-usuario.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(CriarUsuarioDTO: CriarUsuarioDTO) {
    // Verificar se o email já existe
    const emailExistente = await this.prismaService.usuario.findUnique({
      where: { email: CriarUsuarioDTO.email },
    });

    if (emailExistente) {
      throw new ConflictException('Email já está em uso');
    }

    // Criar o usuário
    const usuario = await this.prismaService.usuario.create({
      data: {
        nome: CriarUsuarioDTO.nome,
        email: CriarUsuarioDTO.email,
        senha: CriarUsuarioDTO.senha,
        telefone: CriarUsuarioDTO.telefone,
      },
      // Selecionar apenas os campos necessários
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        // NÃO inclua a senha
      },
    });

    return usuario;
  }

  findAll() {
    return this.prismaService.usuario.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.usuario.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
      },
    });
  }

  update(id: string, AtualizarUsuarioDTO: AtualizarUsuarioDTO) {
    return this.prismaService.usuario.update({
      where: { id },
      data: AtualizarUsuarioDTO,
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.usuario.delete({
      where: { id },
      select: {
        id: true,
      },
    });
  }
}
