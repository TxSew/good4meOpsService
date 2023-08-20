import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Create a Swagger document
  const config = new DocumentBuilder()
    .setTitle('Your API Good4me')
    .setDescription('Good4me')
    .setVersion('1.0')
    .addTag('good4me Api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('/', app, document);
  await app.listen(3000);
}
bootstrap();
