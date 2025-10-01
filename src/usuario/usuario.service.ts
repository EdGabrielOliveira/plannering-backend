import { Injectable, ConflictException } from '@nestjs/common';
import { CriarUsuarioDTO } from './dto/create-usuario.dto';
import { AtualizarUsuarioDTO } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsuarioService {
  private readonly SALT_ROUNDS = 12;

  constructor(private readonly prismaService: PrismaService) {}

  async create(CriarUsuarioDTO: CriarUsuarioDTO) {
    const existingUser = await this.prismaService.usuario.findUnique({
      where: { email: CriarUsuarioDTO.email.toLowerCase() },
    });

    if (existingUser) {
      throw new ConflictException('Email já está em uso');
    }

    const hashedPassword = await bcrypt.hash(
      CriarUsuarioDTO.senha,
      this.SALT_ROUNDS,
    );

    const usuario = await this.prismaService.usuario.create({
      data: {
        nome: CriarUsuarioDTO.nome.trim(),
        sobrenome: CriarUsuarioDTO.sobrenome.trim(),
        email: CriarUsuarioDTO.email.toLowerCase().trim(),
        senha: hashedPassword,
        telefone: CriarUsuarioDTO.telefone?.trim(),
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { senha, ...usuarioSemSenha } = usuario;
    return usuarioSemSenha;
  }

  findAll() {
    return this.prismaService.usuario.findMany({
      select: {
        id: true,
        nome: true,
        sobrenome: true,
        email: true,
        telefone: true,
        dataCriacao: true,
        dataAtualizacao: true,
        atividades: true,
        provas: true,
        tarefas: true,
        materias: true,
        eventos: true,
        perfil: true,
        notificacoes: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.usuario.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        sobrenome: true,
        email: true,
        telefone: true,
        dataCriacao: true,
        dataAtualizacao: true,
        atividades: true,
        provas: true,
        tarefas: true,
        materias: true,
        eventos: true,
        perfil: true,
        notificacoes: true,
      },
    });
  }

  async update(id: string, AtualizarUsuarioDTO: AtualizarUsuarioDTO) {
    const updateData = { ...AtualizarUsuarioDTO };

    if (updateData.senha) {
      updateData.senha = await bcrypt.hash(updateData.senha, this.SALT_ROUNDS);
    }

    const usuario = await this.prismaService.usuario.update({
      where: {
        id,
      },
      data: updateData,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { senha, ...usuarioSemSenha } = usuario;
    return usuarioSemSenha;
  }

  remove(id: string) {
    return this.prismaService.usuario.delete({
      where: { id },
    });
  }
}
