import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Status } from 'generated/prisma';

export class CreateAtividadeDto {
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
