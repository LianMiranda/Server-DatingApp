import { IsArray, IsDate, IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsStrongPassword({
        minLength: 6,
        minLowercase:1,
        minNumbers: 1,
        minUppercase:1,
        minSymbols: 1,
    })
    password: string;

    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsArray()
    passions: string[];

    @IsString()
    gender: string;

    birthday_date: Date;
}
