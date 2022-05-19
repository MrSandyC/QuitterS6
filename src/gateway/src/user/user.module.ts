import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'User-service',
        transport: Transport.TCP,
        options: {
          host: String(process.env.user_service_host),
          port: parseInt(process.env.user_service_port),
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
        name: 'Queet-service',
        transport: Transport.TCP,
        options: {
          host: String(process.env.queet_service_host),
          port: parseInt(process.env.queet_service_port),
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
