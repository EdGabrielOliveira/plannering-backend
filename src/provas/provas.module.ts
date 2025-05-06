import { Module } from '@nestjs/common';
import { ProvasService } from './provas.service';
import { ProvasController } from './provas.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProvasController],
  providers: [ProvasService, PrismaService],
  exports: [ProvasService],
})
export class ProvasModule {}
