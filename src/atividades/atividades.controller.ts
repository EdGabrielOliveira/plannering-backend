import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AtividadesService } from './atividades.service';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { GetCurrentUserId } from 'src/decorators/get-current-user.decorator';

@Controller('atividades')
export class AtividadesController {
  constructor(private readonly atividadesService: AtividadesService) {}

  @Post()
  create(@GetCurrentUserId() @Body() createAtividadeDto: CreateAtividadeDto) {
    return this.atividadesService.create(createAtividadeDto);
  }

  @Get()
  findAll(@GetCurrentUserId() id: string) {
    return this.atividadesService.findAll(id);
  }

  @Get(':id')
  findOne(@GetCurrentUserId() @Param('id') id: string) {
    return this.atividadesService.findOne(id);
  }

  @Patch(':id')
  update(
    @GetCurrentUserId()
    @Param('id')
    id: string,
    @Body() updateAtividadeDto: UpdateAtividadeDto,
  ) {
    return this.atividadesService.update(id, updateAtividadeDto);
  }

  @Delete(':id')
  remove(@GetCurrentUserId() @Param('id') id: string) {
    return this.atividadesService.remove(id);
  }
}
