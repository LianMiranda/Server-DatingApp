import { Controller, Get, Post, Body, Request, Param, ParseIntPipe, UseGuards, Query} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService,
              private authService: AuthService
  ) {}

  @Post('profile-details') //cadastro
  async createUser(@Body() CreateUserDto: CreateUserDto): Promise<User>  {
    return this.usersService.createUser(CreateUserDto);
  }

  @Get('show-users') //listando usuarios
  findAll(): Promise<User[]>{
    return this.usersService.findAll();
  }

  @Get('show-user') //listando usuarios
  findOne(@Query() req): Promise<User>{
    return this.usersService.findOne(req);
  }

  @UseGuards(AuthGuard('local'))
  @Post('sign-in')
  async login(@Request() req) {
    return req.user;
  }
}
