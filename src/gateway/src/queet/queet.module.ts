import { Module } from '@nestjs/common';
import { QueetService } from './queet.service';
import { QueetController } from './queet.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'Queet-service',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${process.env.RABBITMQ_DEFAULT_USER}:` +
              process.env.RABBITMQ_DEFAULT_PASS +
              '@' +
              process.env.RABBITMQ_HOST +
              ':' +
              process.env.RABBITMQ_PORT,
          ],
          queue: String(process.env.RABBITMQ_QUEET_QUEUE),
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [QueetController],
  providers: [QueetService],
})
export class QueetModule {}
