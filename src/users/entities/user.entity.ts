import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
// import { Like } from './like.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number; 
    
    @Column()
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

    // @OneToMany(() => Like, like => like.likedBy)
    // likesGiven: Like[];

    // @OneToMany(() => Like, like => like.likedUser)
    // likesRecived: Like[]

}
