import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Not, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'
import { NotEquals } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ){}
  
  async createUser(payload): Promise<User> {
    const user = new User;
    user.first_name = payload.first_name;
    user.last_name = payload.last_name;
    user.email = payload.email;
    user.password = bcrypt.hashSync(payload.password, 8);
    user.birthday_date = payload.birthday_date;
    user.passions = payload.passions.join("-");
    user.gender = payload.gender;

    return this.usersRepository.save(user); 
  }

  async findOne(email: any): Promise<User | undefined>{
    const userEmail = email.email ? email.email : email
    return this.usersRepository.findOneByOrFail({email: userEmail});
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({});
  }

}