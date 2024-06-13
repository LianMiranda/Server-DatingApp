import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ){}
  
  createUser(payload): Promise<User> {
    const user = new User;
    user.first_name = payload.first_name;
    user.last_name = payload.last_name;
    user.email = payload.email;
    user.password = payload.password;
    user.birthday_date = payload.birthday_date;

    return this.usersRepository.save(user); 
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({});
  }
}
