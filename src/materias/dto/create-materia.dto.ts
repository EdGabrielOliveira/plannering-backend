import { IsOptional, IsString } from 'class-validator';

export class CreateMateriaDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsOptional()
  @IsString()
  usuarioId?: string;

  @IsString()
  cor: string;
}
