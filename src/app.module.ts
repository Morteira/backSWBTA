import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { Facultad } from './facultad/entities/facultad.entity';
import { Carrera } from './carrera/entities/carrera.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { FacultadModule } from './facultad/facultad.module';
import { CarreraModule } from './carrera/carrera.module';
import { SedeModule } from './sede/sede.module';
import { CampusModule } from './campus/campus.module';
import { Campus } from './campus/entities/campus.entity';
import { Sede } from './sede/entities/sede.entity';


@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Users, Facultad, Carrera, Campus, Sede], // Asegúrate de incluir todas las entidades aquí
      synchronize: true, // Activar para desarrollo, desactivarlo en producción
    }),
    UsersModule,
    AuthModule,
    FacultadModule,
    CarreraModule,
    SedeModule,
    CampusModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AppModule {}
