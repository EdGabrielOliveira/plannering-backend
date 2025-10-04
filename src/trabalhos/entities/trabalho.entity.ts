import { Prioridade, Status } from '../../shared/enums';

export class Trabalho {
  id: string;
  titulo: string;
  descricao?: string;
  dataVencimento?: Date;
  prioridade: Prioridade;
  status: Status;
  usuarioId: string;
  materiaId?: string;
  dataCriacao: Date;
  dataAtualizacao: Date;
}
