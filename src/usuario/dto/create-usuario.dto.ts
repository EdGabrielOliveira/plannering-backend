import { IsString, IsEmail, IsOptional, Length } from 'class-validator';

export class CriarUsuarioDTO {
  @IsString()
  @Length(2, 20)
  nome: string;

  @IsString()
  @Length(2, 20)
  sobrenome: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsString()
  @Length(6, 20)
  senha: string;
}
