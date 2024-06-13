import { Controller, Get, Post, Body, Param, ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('profile-details')
  async createUser(@Body() CreateUserDto: CreateUserDto): Promise<User>  {
    return this.usersService.createUser(CreateUserDto);
  }

  @Get('show-users')
  findAll(): Promise<User[]>{
    return this.usersService.findAll();
  }

}
