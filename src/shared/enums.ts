/**
 * Enums compartilhados que correspondem aos enums do Prisma
 * Mantemos uma cópia local para evitar problemas de import do Prisma gerado
 */

export enum Prioridade {
  BAIXA = 'BAIXA',
  MEDIA = 'MEDIA',
  ALTA = 'ALTA',
  URGENTE = 'URGENTE',
}

export enum Status {
  PENDENTE = 'PENDENTE',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  CONCLUIDO = 'CONCLUIDO',
  CANCELADO = 'CANCELADO',
}

export enum TipoNotificacao {
  INFORMACAO = 'INFORMACAO',
  AVISO = 'AVISO',
  ALERTA = 'ALERTA',
}

// Tipos para compatibilidade com o Prisma
export type PrismaEnums = {
  Prioridade: Prioridade;
  Status: Status;
  TipoNotificacao: TipoNotificacao;
};
