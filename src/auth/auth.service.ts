import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly SALT_ROUNDS = 12;

  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.usuario.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (existingUser) {
      throw new ConflictException('Email já está em uso');
    }

    if (!this.isPasswordStrong(dto.senha)) {
      throw new UnauthorizedException(
        'A senha deve ter pelo menos 8 caracteres, incluindo maiúscula, minúscula, número e caractere especial',
      );
    }

    const hash = await bcrypt.hash(dto.senha, this.SALT_ROUNDS);

    try {
      const user = await this.prisma.usuario.create({
        data: {
          nome: dto.nome.trim(),
          email: dto.email.toLowerCase().trim(),
          senha: hash,
        },
      });

      this.logger.log(`Novo usuário registrado: ${user.email}`);

      const payload = {
        sub: user.id,
        email: user.email,
        iat: Math.floor(Date.now() / 1000),
      };

      return {
        access_token: this.jwt.sign(payload),
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email,
        },
      };
    } catch (error) {
      this.logger.error(`Erro ao registrar usuário: ${error.message}`);
      throw new ConflictException('Erro ao criar usuário');
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.usuario.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    const isValidPassword = user
      ? await bcrypt.compare(dto.senha, user.senha)
      : false;

    if (!user || !isValidPassword) {
      this.logger.warn(`Tentativa de login falhada para email: ${dto.email}`);
      throw new UnauthorizedException('Credenciais inválidas');
    }

    this.logger.log(`Login bem-sucedido para usuário: ${user.email}`);

    const payload = {
      sub: user.id,
      email: user.email,
      iat: Math.floor(Date.now() / 1000),
    };

    return {
      access_token: this.jwt.sign(payload),
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
      },
    };
  }

  private isPasswordStrong(password: string): boolean {
    // Pelo menos 8 caracteres, 1 maiúscula, 1 minúscula, 1 número, 1 especial
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  }
}
