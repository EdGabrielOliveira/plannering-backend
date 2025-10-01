import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsStrongPassword,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString({ message: 'Nome deve ser uma string' })
  @MinLength(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
  @MaxLength(20, { message: 'Nome deve ter no máximo 20 caracteres' })
  @Matches(/^[a-zA-ZÀ-ÿ\s]+$/, {
    message: 'Nome deve conter apenas letras e espaços',
  })
  nome: string;

  @IsNotEmpty({ message: 'Sobrenome é obrigatório' })
  @IsString({ message: 'Sobrenome deve ser uma string' })
  @MinLength(2, { message: 'Sobrenome deve ter pelo menos 2 caracteres' })
  @MaxLength(20, { message: 'Sobrenome deve ter no máximo 20 caracteres' })
  @Matches(/^[a-zA-ZÀ-ÿ\s]+$/, {
    message: 'Sobrenome deve conter apenas letras e espaços',
  })
  sobrenome: string;

  @IsEmail({}, { message: 'Email deve ter um formato válido' })
  @MaxLength(70, { message: 'Email deve ter no máximo 70 caracteres' })
  email: string;

  @IsString({ message: 'Senha deve ser uma string' })
  @MinLength(8, { message: 'Senha deve ter pelo menos 8 caracteres' })
  @MaxLength(40, { message: 'Senha deve ter no máximo 40 caracteres' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'Senha deve conter pelo menos: 8 caracteres, 1 letra minúscula, 1 maiúscula, 1 número e 1 símbolo',
    },
  )
  senha: string;
}
