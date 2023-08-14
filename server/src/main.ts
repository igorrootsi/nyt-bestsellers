import  "dotenv/config";

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config  } from "./config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";

function enableSwaggerDocumentation(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('New York Times best sellers')
    .setDescription('Api for fetching NYT best sellers')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  enableSwaggerDocumentation(app);
  await app.listen(config.getPort());
}
bootstrap();
