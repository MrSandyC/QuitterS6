import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PostQueetRequest } from './dto/create-queet.dto';

@Injectable()
export class QueetService {
  constructor(
    @Inject('Queet-service') private readonly queetClient: ClientProxy,
  ) {}
  create(postQueetRequest: PostQueetRequest) {
    return this.queetClient.emit('queet:post-new', postQueetRequest);
  }

  async findAll() {
    return await this.queetClient.send('queet:find-all', {});
  }

  findOne(id: number) {
    return this.queetClient.emit('queet:find-by-id', id);
  }

  fetchByProfile(id: number) {
    return this.queetClient.send('queet:find-by-userid', id);
  }
}
