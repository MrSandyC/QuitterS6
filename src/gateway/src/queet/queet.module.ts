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
          host: String(process.env.queet_service_host),
          port: parseInt(process.env.queet_service_port),
        },
      },
    ]),
  ],
  controllers: [QueetController],
  providers: [QueetService],
})
export class QueetModule {}
