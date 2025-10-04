import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Status } from '../../shared/enums';

export class CreateAtividadeDto {
  @IsString()
  titulo: string;

  @IsString()
  descricao: string;

  @IsString()
  materiaId: string;

  @IsOptional()
  @IsString()
  usuarioId?: string;

  @IsDate()
  @Type(() => Date)
  dataVencimento: Date;

  @IsNumber()
  nota: number;

  @IsString()
  status: Status;
}
