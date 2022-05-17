import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { QueetService } from './queet.service';
import { PostQueetRequest } from './dto/create-queet.dto';
import { Observable } from 'rxjs';
import { AuthzGuard } from 'src/authz/authz.guard';
import { AddUserId, GetUserByAuth0Token } from 'src/util';

@Controller('queet')
export class QueetController {
  constructor(private readonly queetService: QueetService) {}

  @Post()
  create(@Payload() createQueetDto: PostQueetRequest): Observable<string> {
    return this.queetService.create(createQueetDto);
  }

  // @UseGuards(AuthzGuard)
  @Get()
  findAll(@GetUserByAuth0Token() auth0token: string) {
    console.log(auth0token);
    return this.queetService.findAll();
  }

  @UseGuards(AuthzGuard)
  @Get(':id')
  findOne(@Payload() id: number, @AddUserId() user: unknown) {
    console.log(user);
    return this.queetService.findOne(id);
  }

  @UseGuards(AuthzGuard)
  @Get('profile/:id')
  fetchQueetsByProfile(@Param() params) {
    return this.queetService.fetchByProfile(params.id);
  }
}
