import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Queet } from './queet/entities/queet.entity';
import { QueetModule } from './queet/queet.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

// TODO: env file
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.mysql_username,
      password: process.env.mysql_password,
      database: process.env.database,
      entities: [Queet, User],
      synchronize: true,
    }),
    QueetModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
