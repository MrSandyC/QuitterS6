import { Module } from '@nestjs/common';
import { FollowController } from './follow.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FollowService } from './follow.service';

@Module({
  imports: [
    ClientsModule.register([
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
    ]),
  ],
  controllers: [FollowController],
  providers: [FollowService],
})
export class FollowModule {}
