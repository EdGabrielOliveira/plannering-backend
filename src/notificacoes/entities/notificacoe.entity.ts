import { TipoNotificacao } from 'generated/prisma';

export class Notificacoe {
  titulo: string;
  mensagem: string;
  tipo: TipoNotificacao;
  lido: boolean;
  usuarioId: string;
}
