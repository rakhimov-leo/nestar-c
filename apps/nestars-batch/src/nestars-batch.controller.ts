import { Controller, Get } from '@nestjs/common';
import { NestarsBatchService } from './nestars-batch.service';

@Controller()
export class NestarsBatchController {
  constructor(private readonly nestarsBatchService: NestarsBatchService) {}

  @Get()
  getHello(): string {
    return this.nestarsBatchService.getHello();
  }
}
