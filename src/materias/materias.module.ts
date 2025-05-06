import { Module } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { MateriasController } from './materias.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MateriasController],
  providers: [MateriasService, PrismaService],
  exports: [MateriasService],
})
export class MateriasModule {}
