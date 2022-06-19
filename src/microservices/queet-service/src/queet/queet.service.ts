import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateQueetDto } from './dto/create-queet.dto';
import { UpdateQueetDto } from './dto/update-queet.dto';
import { Queet } from './entities/queet.entity';

@Injectable()
export class QueetService {
  constructor(
    @InjectRepository(Queet)
    private readonly queetRepository: Repository<Queet>,
  ) {}
  create(createQueetDto: CreateQueetDto) {
    console.log(createQueetDto);
    return this.queetRepository.save(createQueetDto);
  }

  findAll() {
    return this.queetRepository.find({
      relations: ['user'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} queet`;
  }

  update(id: number, updateQueetDto: UpdateQueetDto) {
    return `This action updates a #${id} queet`;
  }

  remove(id: number) {
    return this.queetRepository.delete(id);
  }

  fetchQueetsByProfile(id: number) {
    return this.queetRepository.find({
      relations: ['user'],
      where: {
        user: { id: id },
      },
    });
  }
}
