import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';

// Cargar el archivo .env
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para todos los orígenes
  app.enableCors({
    origin: '*', // Permite solicitudes desde cualquier origen
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization', // Encabezados permitidos
  });

  // Agregar ValidationPipe global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // Lanza un error si hay propiedades no permitidas
      transform: true, // Convierte tipos de datos según el DTO
    }),
  );

  console.log('Port: ' + process.env.PORT);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
