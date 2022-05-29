import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'User-service',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@${process.env.RABBITMQ_HOST}`,
          ],
          queue: String(process.env.RABBITMQ_USER_QUEUE),
          queueOptions: {
            durable: true,
          },
        },
      },
      {
        name: 'Follow-service',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@${process.env.RABBITMQ_HOST}`,
          ],
          queue: String(process.env.RABBITMQ_FOLLOW_QUEUE),
          queueOptions: {
            durable: true,
          },
        },
      },
      {
        name: 'Queet-service',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@${process.env.RABBITMQ_HOST}`,
          ],
          queue: String(process.env.RABBITMQ_QUEET_QUEUE),
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
