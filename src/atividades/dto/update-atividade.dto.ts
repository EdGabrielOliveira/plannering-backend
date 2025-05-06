import { PartialType } from '@nestjs/swagger';
import { CreateAtividadeDto } from './create-atividade.dto';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Status } from 'generated/prisma';
import { Type } from 'class-transformer';

export class UpdateAtividadeDto extends PartialType(CreateAtividadeDto) {
  @IsString()
  titulo: string;

  @IsString()
  descricao: string;

  @IsString()
  materiaId: string;

  @IsString()
  usuarioId: string;

  @IsDate()
  @Type(() => Date)
  dataVencimento: Date;

  @IsNumber()
  peso: number;

  @IsNumber()
  nota: number;

  @IsString()
  status: Status;
}
