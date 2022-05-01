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
          port: 5002,
        },
      },
      {
        name: 'Follow-service',
        transport: Transport.TCP,
        options: {
          port: 5003,
        },
      },
      {
        name: 'Queet-service',
        transport: Transport.TCP,
        options: {
          port: 5001,
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
