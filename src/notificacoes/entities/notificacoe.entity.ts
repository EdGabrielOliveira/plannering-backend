import { TipoNotificacao } from '../../shared/enums';

export class Notificacoe {
  titulo: string;
  mensagem: string;
  tipo: TipoNotificacao;
  lido: boolean;
  usuarioId: string;
}
