import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Status } from '../../shared/enums';

export class CreateProvaDto {
  @IsString()
  titulo: string;

  @IsString()
  descricao: string;

  @IsNumber()
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
