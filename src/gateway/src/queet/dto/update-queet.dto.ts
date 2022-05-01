import { PartialType } from '@nestjs/mapped-types';
import { IsNumberString } from 'class-validator';
import { PostQueetRequest } from './create-queet.dto';

export class UpdateQueetDto extends PartialType(PostQueetRequest) {
  @IsNumberString()
  id: number;
}
