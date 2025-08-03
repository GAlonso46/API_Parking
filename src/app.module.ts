import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo de base de datos
      host: 'localhost', // Dirección del servidor MySQL (o configuración personalizada)
      port: 3306, // Puerto por defecto de MySQL
      username: 'root', // Usuario de MySQL
      password: 'e4c5najdorf', // Contraseña de MySQL
      database: 'parking', // Nombre de la base de datos
      entities: [], // Aquí irán las entidades más tarde
      synchronize: true, // Sincroniza las entidades con la base de datos (en desarrollo)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
