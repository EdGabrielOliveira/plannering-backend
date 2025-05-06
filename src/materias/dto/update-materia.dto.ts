import { PartialType } from '@nestjs/swagger';
import { CreateMateriaDto } from './create-materia.dto';
import { IsString } from 'class-validator';

export class UpdateMateriaDto extends PartialType(CreateMateriaDto) {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsString()
  usuarioId: string;

  @IsString()
  cor: string;
}
