import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FollowerModule } from './follower/follower.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';

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
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    FollowerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
