import { Status } from 'generated/prisma';

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
