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
import { AtividadesService } from './atividades.service';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { GetCurrentUserId } from 'src/decorators/get-current-user.decorator';
import { ApiKeyGuard, ApiKeyType, API_KEY_TYPES } from '../auth/api-key.guard';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('atividades')
@UseGuards(ApiKeyGuard, JwtAuthGuard)
@SetMetadata(API_KEY_TYPES, [ApiKeyType.ANY])
export class AtividadesController {
  constructor(private readonly atividadesService: AtividadesService) {}

  @Post()
  create(
    @GetCurrentUserId() usuarioId: string,
    @Body() createAtividadeDto: CreateAtividadeDto,
  ) {
    return this.atividadesService.create({ ...createAtividadeDto, usuarioId });
  }

  @Get()
  findAll(@GetCurrentUserId() usuarioId: string) {
    return this.atividadesService.findAll(usuarioId);
  }

  @Get(':id')
  findOne(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.atividadesService.findOne(id, usuarioId);
  }

  @Patch(':id')
  update(
    @GetCurrentUserId() usuarioId: string,
    @Param('id')
    id: string,
    @Body() updateAtividadeDto: UpdateAtividadeDto,
  ) {
    return this.atividadesService.update(id, usuarioId, updateAtividadeDto);
  }

  @Delete(':id')
  remove(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.atividadesService.remove(id, usuarioId);
  }
}
