import { Module } from '@nestjs/common';
import { QueetService } from './queet.service';
import { QueetController } from './queet.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'Queet-service',
        transport: Transport.TCP,
        options: {
          port: 5001,
        },
      },
    ]),
  ],
  controllers: [QueetController],
  providers: [QueetService],
})
export class QueetModule {}
