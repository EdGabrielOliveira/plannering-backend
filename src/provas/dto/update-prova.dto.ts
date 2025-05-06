import { PartialType } from '@nestjs/swagger';
import { CreateProvaDto } from './create-prova.dto';
import { IsDate, IsString } from 'class-validator';
import { Status } from 'generated/prisma';
import { Type } from 'class-transformer';

export class UpdateProvaDto extends PartialType(CreateProvaDto) {
  @IsString()
  titulo: string;

  @IsString()
  descricao: string;

  @IsString()
  @Type(() => Number)
  nota: number;

  @IsString()
  status: Status;

  @IsString()
  materiaId: string;

  @IsString()
  usuarioId: string;

  @IsString()
  local: string;

  @IsDate()
  @Type(() => Date)
  data: Date;
}
