import { Prioridade, Status } from 'generated/prisma';

export class Tarefa {
  nome: string;
  descricao: string;
  status: Status;
  materiaId: string;
  prioridade: Prioridade;
  dataVencimento: Date;
  usuarioId: string;
}
