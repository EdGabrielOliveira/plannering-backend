import { Type } from 'class-transformer';
import {
  IsDate,
  IsString,
  IsEnum,
  IsUUID,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Prioridade, Status } from '../../shared/enums';

export class CreateTarefaDto {
  @IsNotEmpty({ message: 'Título é obrigatório' })
  @IsString({ message: 'Título deve ser uma string' })
  @MinLength(3, { message: 'Título deve ter pelo menos 3 caracteres' })
  @MaxLength(200, { message: 'Título deve ter no máximo 200 caracteres' })
  titulo: string;

  @IsString({ message: 'Descrição deve ser uma string' })
  @MaxLength(1000, { message: 'Descrição deve ter no máximo 1000 caracteres' })
  descricao: string;

  @IsEnum(Prioridade, {
    message: 'Prioridade deve ser BAIXA, MEDIA, ALTA ou URGENTE',
  })
  prioridade: Prioridade;

  @IsEnum(Status, {
    message: 'Status deve ser PENDENTE, EM_ANDAMENTO, CONCLUIDO ou CANCELADO',
  })
  status: Status;

  @IsUUID(4, { message: 'ID da matéria deve ser um UUID válido' })
  materiaId: string;

  @IsDate({ message: 'Data de vencimento deve ser uma data válida' })
  @Type(() => Date)
  dataVencimento: Date;

  // usuarioId será automaticamente preenchido pelo controller
  @IsOptional()
  @IsString()
  usuarioId?: string;
}
