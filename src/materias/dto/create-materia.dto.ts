import { IsString } from 'class-validator';

export class CreateMateriaDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsString()
  usuarioId: string;

  @IsString()
  cor: string;
}
