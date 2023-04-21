// DTO - Create User
import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  @IsString()
  email: string;

  @Field({ nullable: true })
  @IsString()
  password?: string;
}
