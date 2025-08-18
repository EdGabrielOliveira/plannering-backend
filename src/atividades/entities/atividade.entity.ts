import { Status } from '../../shared/enums';

export class Atividade {
  titulo: string;
  descricao: string;
  materiaId: string;
  usuarioId: string;
  dataVencimento: Date;
  peso: number;
  nota: number;
  status: Status;
}
