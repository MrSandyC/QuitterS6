import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueetModule } from './queet/queet.module';
import { UserModule } from './user/user.module';
import { AuthzModule } from './authz/authz.module';
import { ConfigModule } from '@nestjs/config';
import { FollowModule } from './follow/follow.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'Queet-service',
        transport: Transport.TCP,
        options: {
          host: String(process.env.queet_service_host),
          port: parseInt(process.env.queet_service_port),
        },
      },
      {
        name: 'Follow-service',
        transport: Transport.TCP,
        options: {
          host: String(process.env.follow_service_host),
          port: parseInt(process.env.follow_service_port),
        },
      },
      {
        name: 'User-service',
        transport: Transport.TCP,
        options: {
          host: String(process.env.user_service_host),
          port: parseInt(process.env.user_service_port),
        },
      },
    ]),
    QueetModule,
    UserModule,
    AuthzModule,
    FollowModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
