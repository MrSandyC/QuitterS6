import { Module } from '@nestjs/common';
import { QueetService } from './queet.service';
import { QueetController } from './queet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Queet } from './entities/queet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Queet])],
  controllers: [QueetController],
  providers: [QueetService],
})
export class QueetModule {}
