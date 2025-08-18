import { Module } from '@nestjs/common';
import { ProvasService } from './provas.service';
import { ProvasController } from './provas.controller';

@Module({
  controllers: [ProvasController],
  providers: [ProvasService],
  exports: [ProvasService],
})
export class ProvasModule {}
