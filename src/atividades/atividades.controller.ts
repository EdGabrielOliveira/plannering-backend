import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AtividadesService } from './atividades.service';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { GetCurrentUserId } from 'src/decorators/get-current-user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('atividades')
@UseGuards(JwtAuthGuard)
export class AtividadesController {
  constructor(private readonly atividadesService: AtividadesService) {}

  @Post()
  create(@GetCurrentUserId() @Body() createAtividadeDto: CreateAtividadeDto) {
    return this.atividadesService.create(createAtividadeDto);
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
