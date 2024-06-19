import { User } from "src/users/entities/user.entity";
import { ManyToOne, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Match {

      @PrimaryGeneratedColumn()
      id: number

      @ManyToOne(() => User, user => user.matches) //principal
      userId1: User;  

      @ManyToOne(() => User, user => user.matches)
      userId2: User;
}