import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
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
          sobrenome: dto.sobrenome.trim(),
          email: dto.email.toLowerCase().trim(),
          senha: hash,
        },
      });

      this.logger.log(`Novo usuário registrado: ${user.email}`);

      const tokens = await this.generateTokens(user.id, user.email);

      return {
        ...tokens,
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email,
        },
      };
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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

    const tokens = await this.generateTokens(user.id, user.email);

    return {
      ...tokens,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
      },
    };
  }

  private isPasswordStrong(password: string): boolean {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  }

  private async generateTokens(userId: string, email: string) {
    const payload = {
      sub: userId,
      email: email,
      iat: Math.floor(Date.now() / 1000),
    };

    const accessToken = this.jwt.sign(payload);
    const refreshToken = this.generateRefreshToken();

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    await this.prisma
      .$executeRaw`DELETE FROM refresh_tokens WHERE usuario_id = ${userId}`;

    await this.prisma.$executeRaw`
      INSERT INTO refresh_tokens (id, token, usuario_id, expires_at, created_at, updated_at)
      VALUES (gen_random_uuid(), ${refreshToken}, ${userId}, ${expiresAt}, NOW(), NOW())
    `;

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  private generateRefreshToken(): string {
    return crypto.randomBytes(64).toString('hex');
  }

  async refreshTokens(refreshToken: string) {
    const tokenRecords = await this.prisma.$queryRaw<
      Array<{
        token: string;
        expires_at: Date;
        usuario_id: string;
        nome: string;
        email: string;
      }>
    >`
      SELECT rt.token, rt.expires_at, rt.usuario_id, u.nome, u.email
      FROM refresh_tokens rt
      JOIN usuarios u ON rt.usuario_id = u.id
      WHERE rt.token = ${refreshToken}
      LIMIT 1
    `;

    if (!tokenRecords || tokenRecords.length === 0) {
      throw new UnauthorizedException('Refresh token inválido');
    }

    const tokenRecord = tokenRecords[0];

    if (tokenRecord.expires_at < new Date()) {
      await this.prisma
        .$executeRaw`DELETE FROM refresh_tokens WHERE token = ${refreshToken}`;
      throw new UnauthorizedException('Refresh token expirado');
    }

    const tokens = await this.generateTokens(
      tokenRecord.usuario_id,
      tokenRecord.email,
    );

    this.logger.log(`Tokens renovados para usuário: ${tokenRecord.email}`);

    return {
      ...tokens,
      user: {
        id: tokenRecord.usuario_id,
        nome: tokenRecord.nome,
        email: tokenRecord.email,
      },
    };
  }

  async revokeRefreshToken(refreshToken: string) {
    await this.prisma
      .$executeRaw`DELETE FROM refresh_tokens WHERE token = ${refreshToken}`;
    this.logger.log('Refresh token revogado');
  }

  async revokeAllUserTokens(userId: string) {
    await this.prisma
      .$executeRaw`DELETE FROM refresh_tokens WHERE usuario_id = ${userId}`;
    this.logger.log(
      `Todos os refresh tokens do usuário ${userId} foram revogados`,
    );
  }
}
