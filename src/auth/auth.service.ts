import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService
        // private jwtService: JwtService
        ){}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user && bcrypt.compareSync(password, user.password)) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

      // async login(user: any) {
      //   if (!user || !user.email || !user.id) {
      //     throw new UnauthorizedException('Invalid credentials');
      //   }
      //   const payload = { email: user.email, sub: user.id };
      //   return {
      //     access_token: this.jwtService.sign(payload),
      //   };
      // }
}
