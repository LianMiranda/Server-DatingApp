import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Match } from './entities/match.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MatchService {
 
  @InjectRepository(Match)
  private matchRepository: Repository<Match> 

  @InjectRepository(User)
  private userRepository: Repository<User>


     async createMatch(userId1: number, userId2: number): Promise<Match>{
      
      const user1 = await this.userRepository.findOne({ where: { id: userId1 } });
      const user2 = await this.userRepository.findOne({ where: { id: userId2 } });

      if (!user1 || !user2) {
        throw new ConflictException('User not found');
      }

       const match = new Match()
       match.userId1 = user1; 
       match.userId2 = user2;

       try{
       await this.matchRepository.save(match); 
       console.log("Deu match")
       }catch(error){
         console.log("error creating match");
         throw new ConflictException();
       }
       return match
     }

     async findOne(matchId: number): Promise<Match> {
      const match = await this.matchRepository.findOne({ where: { id: matchId}, relations: ['userId1', 'userId2'] });
        if (!match) {
          throw new NotFoundException('Match not found');
        }
      return match;
    }
}
