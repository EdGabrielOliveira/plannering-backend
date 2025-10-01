import {
  Controller,
  Body,
  Param,
  Delete,
  Post,
  Patch,
  Get,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';

import { UsuarioService } from './usuario.service';
import { AtualizarUsuarioDTO } from './dto/update-usuario.dto';

import { CriarUsuarioDTO } from './dto/create-usuario.dto';
import { ApiKeyGuard, ApiKeyType, API_KEY_TYPES } from '../auth/api-key.guard';

@Controller('usuarios')
@UseGuards(ApiKeyGuard)
@SetMetadata(API_KEY_TYPES, [ApiKeyType.ANY])
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async criar(@Body() CriarUsuarioDTO: CriarUsuarioDTO) {
    return this.usuarioService.create(CriarUsuarioDTO);
  }

  @Patch(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() AtualizarUsuarioDto: AtualizarUsuarioDTO,
  ): Promise<any> {
    return await this.usuarioService.update(id, AtualizarUsuarioDto);
  }

  @Delete(':id')
  async deletar(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Get()
  buscarTodos() {
    return this.usuarioService.findAll();
  }
}
