import { PartialType } from '@nestjs/mapped-types';
import { CreateQueetDto } from './create-queet.dto';

export class UpdateQueetDto extends PartialType(CreateQueetDto) {
  id: number;
}
