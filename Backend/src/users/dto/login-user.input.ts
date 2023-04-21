// DTO - Create User
import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsEmail } from 'class-validator';

@InputType()
export class LoginUserInput {
  @Field({ nullable: true })
  @IsString()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsString()
  password?: string;
}
