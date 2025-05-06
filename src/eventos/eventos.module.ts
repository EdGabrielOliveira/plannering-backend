import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EventosController],
  providers: [EventosService, PrismaService],
  exports: [EventosService],
})
export class EventosModule {}
