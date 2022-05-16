import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FollowerModule } from './follower/follower.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

// TODO: env file
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '10.42.1.6',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'quitter-follow',
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
