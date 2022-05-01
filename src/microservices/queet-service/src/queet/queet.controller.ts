import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { QueetService } from './queet.service';
import { CreateQueetDto } from './dto/create-queet.dto';
import { UpdateQueetDto } from './dto/update-queet.dto';

@Controller()
export class QueetController {
  constructor(private readonly queetService: QueetService) {}

  @MessagePattern('queet:post-new')
  create(@Payload() createQueetDto: CreateQueetDto) {
    console.log(createQueetDto);
    return this.queetService.create(createQueetDto);
  }

  @MessagePattern('queet:find-all')
  findAll() {
    return this.queetService.findAll();
  }

  @MessagePattern('queet:find-by-id')
  findOne(@Payload() id: number) {
    return this.queetService.findOne(id);
  }

  @MessagePattern('updateQueet')
  update(@Payload() updateQueetDto: UpdateQueetDto) {
    return this.queetService.update(updateQueetDto.id, updateQueetDto);
  }

  @MessagePattern('removeQueet')
  remove(@Payload() id: number) {
    return this.queetService.remove(id);
  }

  @MessagePattern('queet:find-by-userid')
  fetchQueetsByProfile(id: number) {
    return this.queetService.fetchQueetsByProfile(id);
  }
}
