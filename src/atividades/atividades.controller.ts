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
  create(
    @Body() createAtividadeDto: CreateAtividadeDto,
    @GetCurrentUserId() userId: string,
  ) {
    createAtividadeDto.usuarioId = userId;
    return this.atividadesService.create(createAtividadeDto);
  }

  @Get()
  findAll(@GetCurrentUserId() userId: string) {
    return this.atividadesService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetCurrentUserId() userId: string) {
    return this.atividadesService.findOne(id, userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAtividadeDto: UpdateAtividadeDto,
    @GetCurrentUserId() userId: string,
  ) {
    return this.atividadesService.update(id, updateAtividadeDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetCurrentUserId() userId: string) {
    return this.atividadesService.remove(id, userId);
  }
}
