import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  SetMetadata,
} from '@nestjs/common';
import { ApiKeyGuard, ApiKeyType, API_KEY_TYPES } from '../auth/api-key.guard';

interface RequestWithClient extends Request {
  clientType: string;
}

@Controller('api-keys')
@UseGuards(ApiKeyGuard)
@SetMetadata(API_KEY_TYPES, [ApiKeyType.ANY])
export class ApiKeysController {
  @Get('info')
  getApiKeyInfo(@Request() req: RequestWithClient) {
    return {
      clientType: req.clientType,
      timestamp: new Date().toISOString(),
      message: `Conectado via ${req.clientType}`,
    };
  }

  @Get('web-only')
  @SetMetadata(API_KEY_TYPES, [ApiKeyType.WEB])
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
  @SetMetadata(API_KEY_TYPES, [ApiKeyType.MOBILE])
  getMobileOnlyData() {
    return {
      message: 'Este endpoint está disponível apenas para o app mobile',
      data: {
        features: ['Push notifications', 'Offline sync', 'Camera integration'],
      },
    };
  }

  @Post('validate')
  validateApiKey(
    @Request() req: RequestWithClient,
    @Body() body: { test?: string },
  ) {
    return {
      valid: true,
      clientType: req.clientType,
      timestamp: new Date().toISOString(),
      testData: body.test || 'No test data provided',
    };
  }

  @Get('status')
  getStatus(@Request() req: RequestWithClient) {
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
          '/api/trabalhos',
        ],
        restricted: isWeb
          ? ['/api/api-keys/mobile-only']
          : ['/api/api-keys/web-only'],
      },
    };
  }
}
