import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DateFormatInterceptor } from './interceptors/DateFormatInterceptor';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserFilterInterceptor } from './interceptors/PrismaUserFilterInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new DateFormatInterceptor());
  const prismaService = app.get(PrismaService);
  app.useGlobalInterceptors(new PrismaUserFilterInterceptor(prismaService));

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const swaggerEnabled = process.env.SWAGGER_ENABLED === 'true';
  const swaggerPath = process.env.SWAGGER_PATH || 'docs';

  if (swaggerEnabled) {
    const config = new DocumentBuilder()
      .setTitle(process.env.SWAGGER_TITLE || 'Planner API')
      .setDescription(
        process.env.SWAGGER_DESCRIPTION || 'API para gerenciamento de tarefas',
      )
      .setVersion(process.env.SWAGGER_VERSION || '1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config, {
      deepScanRoutes: true,
    });

    SwaggerModule.setup(swaggerPath, app, document);
  }

  const port = process.env.PORT || 3001;
  await app.listen(port);
}

bootstrap();
