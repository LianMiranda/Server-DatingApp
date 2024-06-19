import { Controller,Post, Body, Get, NotFoundException, Param, ParseIntPipe} from '@nestjs/common';
import { MatchService } from './match.service';
import { Match } from './entities/match.entity';

@Controller()
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

   @Post('matchs')
   async createMatch(@Body('userId1') userId1: number, @Body('userId2') userId2: number): Promise<Match>{
     return this.matchService.createMatch(userId1, userId2)
   }

   @Get('matchs/:id')
   async getMatch(@Param('id', ParseIntPipe) id: number): Promise<Match> {
     return this.matchService.findOne(id);
   }
}
