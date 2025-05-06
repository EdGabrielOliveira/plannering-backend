import { IsString, IsEmail, IsOptional, Length } from 'class-validator';

export class CriarUsuarioDTO {
  @IsString()
  @Length(3, 100)
  nome: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsString()
  @Length(6, 20)
  senha: string;
  usuario: any;
}
