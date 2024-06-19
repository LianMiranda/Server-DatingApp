 
import { Match } from 'src/match/entities/match.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number; 
    
    @Column({ unique: true })
    email: string;

    @Column()
    password: string; 

    @Column()
    first_name: string; 

    @Column()
    last_name: string; 

    @Column({default: 'unknown'})
    passions: string;

    @Column({default: 'unknown'})
    gender: string;

    @Column()
    birthday_date: Date; 

    @OneToMany(() => Match, match => match.userId1)
    matches: Match[]
}
