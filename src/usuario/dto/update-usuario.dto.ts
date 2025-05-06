import { IsString, IsEmail, IsOptional, Length } from 'class-validator';

export class AtualizarUsuarioDTO {
  @IsOptional()
  @IsString()
  @Length(3, 100)
  nome?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsString()
  @Length(6, 20)
  senha?: string;
}
