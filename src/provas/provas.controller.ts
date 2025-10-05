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
import { ProvasService } from './provas.service';
import { CreateProvaDto } from './dto/create-prova.dto';
import { UpdateProvaDto } from './dto/update-prova.dto';
import { GetCurrentUserId } from '../decorators/get-current-user.decorator';
import { ApiKeyGuard, ApiKeyType, API_KEY_TYPES } from '../auth/api-key.guard';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('provas')
@UseGuards(ApiKeyGuard, JwtAuthGuard)
@SetMetadata(API_KEY_TYPES, [ApiKeyType.ANY])
export class ProvasController {
  constructor(private readonly provasService: ProvasService) {}

  @Post()
  create(
    @GetCurrentUserId() usuarioId: string,
    @Body() createProvaDto: CreateProvaDto,
  ) {
    return this.provasService.create({ ...createProvaDto, usuarioId });
  }

  @Get()
  findAll(@GetCurrentUserId() usuarioId: string) {
    return this.provasService.findAll(usuarioId);
  }

  @Get(':id')
  findOne(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.provasService.findOne(id, usuarioId);
  }

  @Patch(':id')
  update(
    @GetCurrentUserId() usuarioId: string,
    @Param('id') id: string,
    @Body() updateProvaDto: UpdateProvaDto,
  ) {
    return this.provasService.update(id, usuarioId, updateProvaDto);
  }

  @Delete(':id')
  remove(@GetCurrentUserId() usuarioId: string, @Param('id') id: string) {
    return this.provasService.remove(id, usuarioId);
  }
}
