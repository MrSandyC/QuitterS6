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
      host: '10.42.1.6',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'quitter-queet',
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
