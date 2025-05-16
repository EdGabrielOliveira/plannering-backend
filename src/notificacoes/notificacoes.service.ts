import { Injectable } from '@nestjs/common';
import { CreateNotificacoeDto } from './dto/create-notificacoe.dto';
import { UpdateNotificacoeDto } from './dto/update-notificacoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificacoesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createNotificacoeDto: CreateNotificacoeDto) {
    const notificacoes = await this.prismaService.notificacao.create({
      data: {
        titulo: createNotificacoeDto.titulo,
        mensagem: createNotificacoeDto.mensagem,
        tipo: createNotificacoeDto.tipo,
        lida: createNotificacoeDto.lido,
        usuario: {
          connect: {
            id: createNotificacoeDto.usuarioId,
          },
        },
      },
    });
    return notificacoes;
  }

  findAll(id: string) {
    return this.prismaService.notificacao.findMany({
      where: { id },
    });
  }

  findOne(id: string) {
    return this.prismaService.notificacao.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateNotificacoeDto: UpdateNotificacoeDto) {
    return this.prismaService.notificacao.update({
      where: {
        id,
      },
      data: updateNotificacoeDto,
    });
  }

  remove(id: string) {
    return this.prismaService.notificacao.delete({
      where: {
        id,
      },
    });
  }
}
