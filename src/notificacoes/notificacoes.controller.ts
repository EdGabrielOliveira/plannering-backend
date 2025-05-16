import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotificacoesService } from './notificacoes.service';
import { CreateNotificacoeDto } from './dto/create-notificacoe.dto';
import { UpdateNotificacoeDto } from './dto/update-notificacoe.dto';
import { GetCurrentUserId } from 'src/decorators/get-current-user.decorator';

@Controller('notificacoes')
export class NotificacoesController {
  constructor(private readonly notificacoesService: NotificacoesService) {}

  @Post()
  create(
    @GetCurrentUserId()
    @Body()
    createNotificacoeDto: CreateNotificacoeDto,
  ) {
    return this.notificacoesService.create(createNotificacoeDto);
  }

  @Get()
  findAll(@GetCurrentUserId() id: string) {
    return this.notificacoesService.findAll(id);
  }

  @Get(':id')
  findOne(@GetCurrentUserId() @Param('id') id: string) {
    return this.notificacoesService.findOne(id);
  }

  @Patch(':id')
  update(
    @GetCurrentUserId()
    @Param('id')
    id: string,
    @Body() updateNotificacoeDto: UpdateNotificacoeDto,
  ) {
    return this.notificacoesService.update(id, updateNotificacoeDto);
  }

  @Delete(':id')
  remove(@GetCurrentUserId() @Param('id') id: string) {
    return this.notificacoesService.remove(id);
  }
}
