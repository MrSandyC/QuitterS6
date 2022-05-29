import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Queet } from './queet/entities/queet.entity';
import { QueetModule } from './queet/queet.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: String(process.env.MYSQL_HOST),
      port: parseInt(process.env.MYSQL_PORT),
      username: String(process.env.mysql_username),
      password: String(process.env.mysql_password),
      database: String(process.env.database),
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
