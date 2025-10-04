import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  SetMetadata,
} from '@nestjs/common';
import { TrabalhosService } from './trabalhos.service';
import { CreateTrabalhoDto } from './dto/create-trabalho.dto';
import { UpdateTrabalhoDto } from './dto/update-trabalho.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { GetCurrentUserId } from '../decorators/get-current-user.decorator';
import { UserIdInterceptor } from '../interceptors/UserIdInterceptor';
import { ApiKeyGuard, ApiKeyType, API_KEY_TYPES } from '../auth/api-key.guard';

@Controller('trabalhos')
@UseGuards(ApiKeyGuard, JwtAuthGuard)
@UseInterceptors(UserIdInterceptor)
@SetMetadata(API_KEY_TYPES, [ApiKeyType.ANY])
export class TrabalhosController {
  constructor(private readonly trabalhosService: TrabalhosService) {}

  @Post()
  create(
    @Body() createTrabalhoDto: CreateTrabalhoDto,
    @GetCurrentUserId() usuarioId: string,
  ) {
    return this.trabalhosService.create(createTrabalhoDto, usuarioId);
  }

  @Get()
  findAll(@GetCurrentUserId() usuarioId: string) {
    return this.trabalhosService.findAll(usuarioId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetCurrentUserId() usuarioId: string) {
    return this.trabalhosService.findOne(id, usuarioId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrabalhoDto: UpdateTrabalhoDto,
    @GetCurrentUserId() usuarioId: string,
  ) {
    return this.trabalhosService.update(id, updateTrabalhoDto, usuarioId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetCurrentUserId() usuarioId: string) {
    return this.trabalhosService.remove(id, usuarioId);
  }
}
