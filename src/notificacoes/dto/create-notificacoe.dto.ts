import { IsBoolean, IsOptional, IsString } from 'class-validator';
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

  @IsOptional()
  @IsString()
  usuarioId?: string;
}
