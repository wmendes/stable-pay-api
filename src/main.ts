import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  
  // Validation pipe
  app.useGlobalPipes(new ValidationPipe());
  
  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Stable Pay API')
    .setDescription('API for handling payments between payers and receivers')
    .setVersion('1.0')
    .addTag('payments')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(3000);
  logger.log('Application is running on: http://localhost:3000');
  logger.log('API documentation available at: http://localhost:3000/api');
}
bootstrap();
