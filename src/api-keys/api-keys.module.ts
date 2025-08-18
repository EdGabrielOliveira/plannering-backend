import { Module } from '@nestjs/common';
import { ApiKeysController } from './api-keys.controller';

@Module({
  controllers: [ApiKeysController],
  providers: [],
  exports: [],
})
export class ApiKeysModule {}
