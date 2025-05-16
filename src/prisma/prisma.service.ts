import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Definindo tipos para os parâmetros do middleware
type PrismaMiddlewareParams = {
  model?: string;
  action: string;
  args: Record<string, any>;
  dataPath: string[];
  runInTransaction: boolean;
};

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private usuarioAtualId: string | null = null;

  constructor() {
    super({
      middleware: async (params: PrismaMiddlewareParams, next) => {
        // Tabelas que precisam de filtro por usuário
        const tabelasComUsuario = [
          'tarefa',
          'evento',
          'prova',
          'materia',
          'atividade',
        ];

        const modelName = params.model?.toLowerCase() || '';

        // Se for uma operação de leitura em uma tabela que precisa de filtro
        if (
          [
            'findUnique',
            'findFirst',
            'findMany',
            'count',
            'aggregate',
          ].includes(params.action) &&
          tabelasComUsuario.includes(modelName) &&
          this.usuarioAtualId
        ) {
          if (!params.args.where) {
            params.args.where = {};
          }
          if (
            typeof params.args.where === 'object' &&
            params.args.where !== null
          ) {
            // Adiciona o filtro de usuário
            params.args.where.usuarioId = this.usuarioAtualId;
          }
        }

        if (
          params.action === 'create' &&
          tabelasComUsuario.includes(modelName) &&
          this.usuarioAtualId
        ) {
          if (!params.args.data) {
            params.args.data = {};
          }
          if (
            typeof params.args.data === 'object' &&
            params.args.data !== null
          ) {
            const data = params.args.data as { usuarioId?: string };
            if (!data.usuarioId) {
              params.args.data.usuarioId = this.usuarioAtualId;
            }
          }
        }

        return next(params);
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  setUsuarioContexto(id: string) {
    this.usuarioAtualId = id;
  }

  limparUsuarioContexto() {
    this.usuarioAtualId = null;
  }
}
