import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  // Importamos TypeOrmModule
import { UsersService } from './users.service';
import { Users } from './users.entity';  // Importamos la entidad User

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),  // Registramos la entidad User con TypeOrm
  ],
  providers: [UsersService],
  exports: [UsersService],  // Exportamos el servicio para que otros módulos puedan usarlo
})
export class UsersModule {}
