import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ApiKeyGuard } from '../auth/api-key.guard';
import {
  RequireApiKey,
  WebOnly,
  MobileOnly,
} from '../decorators/api-key.decorator';
import { ApiKeyType } from '../auth/api-key.guard';

@Controller('api-keys')
@UseGuards(JwtAuthGuard, ApiKeyGuard)
export class ApiKeysController {
  @Get('info')
  @RequireApiKey([ApiKeyType.ANY])
  getApiKeyInfo(@Request() req: any) {
    return {
      clientType: req.clientType,
      timestamp: new Date().toISOString(),
      message: `Conectado via ${req.clientType}`,
    };
  }

  @Get('web-only')
  @WebOnly()
  getWebOnlyData() {
    return {
      message: 'Este endpoint está disponível apenas para o cliente web',
      data: {
        features: [
          'Dashboard completo',
          'Relatórios avançados',
          'Configurações',
        ],
      },
    };
  }

  @Get('mobile-only')
  @MobileOnly()
  getMobileOnlyData() {
    return {
      message: 'Este endpoint está disponível apenas para o app mobile',
      data: {
        features: ['Push notifications', 'Offline sync', 'Camera integration'],
      },
    };
  }

  @Post('validate')
  @RequireApiKey([ApiKeyType.ANY])
  validateApiKey(@Request() req: any, @Body() body: { test?: string }) {
    return {
      valid: true,
      clientType: req.clientType,
      timestamp: new Date().toISOString(),
      testData: body.test || 'No test data provided',
    };
  }

  @Get('status')
  @RequireApiKey([ApiKeyType.ANY])
  getStatus(@Request() req: any) {
    const isWeb = req.clientType === 'WEB';
    const isMobile = req.clientType === 'MOBILE';

    return {
      status: 'active',
      clientType: req.clientType,
      permissions: {
        web: isWeb,
        mobile: isMobile,
        admin: false,
      },
      endpoints: {
        available: [
          '/api/tarefas',
          '/api/eventos',
          '/api/materias',
          '/api/atividades',
          '/api/provas',
          '/api/notificacoes',
        ],
        restricted: isWeb
          ? ['/api/api-keys/mobile-only']
          : ['/api/api-keys/web-only'],
      },
    };
  }
}
