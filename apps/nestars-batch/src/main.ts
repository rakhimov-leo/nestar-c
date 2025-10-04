import { NestFactory } from '@nestjs/core';
import { NestarsBatchModule } from './nestars-batch.module';

async function bootstrap() {
	const app = await NestFactory.create(NestarsBatchModule);
	await app.listen(process.env.SERVER_BATCH ?? 3000);
}
bootstrap();
