import { PartialType } from '@nestjs/swagger';
import { CreateNotificacoeDto } from './create-notificacoe.dto';
import { IsString, IsBoolean } from 'class-validator';
import { TipoNotificacao } from 'generated/prisma';

export class UpdateNotificacoeDto extends PartialType(CreateNotificacoeDto) {
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
