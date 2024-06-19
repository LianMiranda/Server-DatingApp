import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MatchModule } from './match/match.module';
import { User } from './users/entities/user.entity';
import { Match } from './match/entities/match.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'datingapp',
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule,
    MatchModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
