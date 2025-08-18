import { Prioridade, Status } from '../../shared/enums';

export class Tarefa {
  nome: string;
  descricao: string;
  status: Status;
  materiaId: string;
  prioridade: Prioridade;
  dataVencimento: Date;
  usuarioId: string;
}
