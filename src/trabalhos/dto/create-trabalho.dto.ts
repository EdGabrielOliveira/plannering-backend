import {
  IsString,
  IsOptional,
  IsDateString,
  IsEnum,
  Length,
} from 'class-validator';
import { Prioridade, Status } from '../../shared/enums';

export class CreateTrabalhoDto {
  @IsString()
  @Length(3, 200)
  titulo: string;

  @IsOptional()
  @IsString()
  @Length(0, 1000)
  descricao?: string;

  @IsOptional()
  @IsDateString()
  dataVencimento?: string;

  @IsOptional()
  @IsEnum(Prioridade)
  prioridade?: Prioridade;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsOptional()
  @IsString()
  materiaId?: string;
}
