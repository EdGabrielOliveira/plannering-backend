import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsString } from 'class-validator';

export class CreateEventoDto {
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
