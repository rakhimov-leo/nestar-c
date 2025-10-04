import { Module } from '@nestjs/common';
import { NestarsBatchController } from './nestars-batch.controller';
import { NestarsBatchService } from './nestars-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [NestarsBatchController],
  providers: [NestarsBatchService],
})
export class NestarsBatchModule {}
