import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProvasService } from './provas.service';
import { CreateProvaDto } from './dto/create-prova.dto';
import { UpdateProvaDto } from './dto/update-prova.dto';
import { GetCurrentUserId } from 'src/decorators/get-current-user.decorator';

@Controller('provas')
export class ProvasController {
  constructor(private readonly provasService: ProvasService) {}

  @Post()
  create(@GetCurrentUserId() @Body() createProvaDto: CreateProvaDto) {
    return this.provasService.create(createProvaDto);
  }

  @Get()
  findAll(@GetCurrentUserId() id: string) {
    return this.provasService.findAll(id);
  }

  @Get(':id')
  findOne(@GetCurrentUserId() @Param('id') id: string) {
    return this.provasService.findOne(id);
  }

  @Patch(':id')
  update(
    @GetCurrentUserId() @Param('id') id: string,
    @Body() updateProvaDto: UpdateProvaDto,
  ) {
    return this.provasService.update(id, updateProvaDto);
  }

  @Delete(':id')
  remove(@GetCurrentUserId() @Param('id') id: string) {
    return this.provasService.remove(id);
  }
}
