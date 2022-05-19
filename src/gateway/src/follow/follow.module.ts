import { Module } from '@nestjs/common';
import { FollowController } from './follow.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FollowService } from './follow.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'Follow-service',
        transport: Transport.TCP,
        options: {
          host: String(process.env.follow_service_host),
          port: parseInt(process.env.follow_service_port),
        },
      },
    ]),
  ],
  controllers: [FollowController],
  providers: [FollowService],
})
export class FollowModule {}
