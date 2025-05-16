import {
  Controller,
  Body,
  Param,
  Delete,
  Post,
  Patch,
  Get,
} from '@nestjs/common';

import { UsuarioService } from './usuario.service';
import { AtualizarUsuarioDTO } from './dto/update-usuario.dto';

import { CriarUsuarioDTO } from './dto/create-usuario.dto';

@Controller('usuarios')
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
    return await this.atualizar(id, AtualizarUsuarioDto);
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
