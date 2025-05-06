import { PartialType } from '@nestjs/swagger';
import { CreateEventoDto } from './create-evento.dto';
import { IsString, IsBoolean, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {
  @IsString()
  titulo: string;

  @IsString()
  descricao: string;

  @IsDate()
  @Type(() => Date)
  dataInicio: Date;

  @IsDate()
  @Type(() => Date)
  dataFim: Date;

  @IsString()
  local: string;

  @IsBoolean()
  diaInteiro: boolean;

  @IsString()
  cor: string;

  @IsString()
  usuarioId: string;
}
