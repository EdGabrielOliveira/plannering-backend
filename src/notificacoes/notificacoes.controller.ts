import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { NotificacoesService } from './notificacoes.service';
import { CreateNotificacoeDto } from './dto/create-notificacoe.dto';
import { UpdateNotificacoeDto } from './dto/update-notificacoe.dto';
import { GetCurrentUserId } from 'src/decorators/get-current-user.decorator';
import { ApiKeyGuard, ApiKeyType, API_KEY_TYPES } from '../auth/api-key.guard';

@Controller('notificacoes')
@UseGuards(ApiKeyGuard)
@SetMetadata(API_KEY_TYPES, [ApiKeyType.ANY])
export class NotificacoesController {
  constructor(private readonly notificacoesService: NotificacoesService) {}

  @Post()
  create(
    @GetCurrentUserId() usuarioId: string,
    @Body() createNotificacoeDto: CreateNotificacoeDto,
  ) {
    return this.notificacoesService.create({
      ...createNotificacoeDto,
      usuarioId,
    });
  }

  @Get()
  findAll(@GetCurrentUserId() usuarioId: string) {
    return this.notificacoesService.findAll(usuarioId);
  }

  @Get(':id')
  findOne(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.notificacoesService.findOne(id, usuarioId);
  }

  @Patch(':id')
  update(
    @GetCurrentUserId() usuarioId: string,
    @Param('id')
    id: string,
    @Body() updateNotificacoeDto: UpdateNotificacoeDto,
  ) {
    return this.notificacoesService.update(id, usuarioId, updateNotificacoeDto);
  }

  @Delete(':id')
  remove(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.notificacoesService.remove(id, usuarioId);
  }
}
