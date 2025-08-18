import { IsBoolean, IsString } from 'class-validator';
import { TipoNotificacao } from '../../shared/enums';

export class CreateNotificacoeDto {
  @IsString()
  titulo: string;

  @IsString()
  mensagem: string;

  @IsString()
  tipo: TipoNotificacao;

  @IsBoolean()
  lido: boolean;

  @IsString()
  usuarioId: string;
}
