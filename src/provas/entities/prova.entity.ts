import { Status } from 'generated/prisma';

export class Prova {
  titulo: string;
  descricao: string;
  nota: number;
  status: Status;
  materiaId: string;
  usuarioId: string;
  local: string;
  data: Date;
}
