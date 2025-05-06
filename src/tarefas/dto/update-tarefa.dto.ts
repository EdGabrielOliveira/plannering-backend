import { PartialType } from '@nestjs/swagger';
import { CreateTarefaDto } from './create-tarefa.dto';
import { IsString, IsDate } from 'class-validator';
import { Prioridade, Status } from 'generated/prisma';
import { Type } from 'class-transformer';

export class UpdateTarefaDto extends PartialType(CreateTarefaDto) {
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
