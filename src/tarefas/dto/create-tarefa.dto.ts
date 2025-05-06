import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';
import { Prioridade, Status } from 'generated/prisma';

export class CreateTarefaDto {
  @IsString()
  titulo: string;

  @IsString()
  descricao: string;

  @IsString()
  prioridade: Prioridade;

  @IsString()
  status: Status;

  @IsString()
  materiaId: string;

  @IsDate()
  @Type(() => Date)
  dataVencimento: Date;

  @IsString()
  usuarioId: string;
}
