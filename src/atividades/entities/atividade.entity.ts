import { Status } from '../../shared/enums';

export class Atividade {
  titulo: string;
  descricao: string;
  materiaId: string;
  usuarioId: string;
  dataVencimento: Date;

  nota: number;
  status: Status;
}
