import { IsIn, IsInt } from "class-validator";
import { User } from "src/users/entities/user.entity";

export class CreateMatchDto {
   userId1: User;
   userId2: User;

}
