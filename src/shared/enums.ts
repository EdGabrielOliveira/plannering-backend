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

export type PrismaEnums = {
  Prioridade: Prioridade;
  Status: Status;
  TipoNotificacao: TipoNotificacao;
};
