// Entity - Card
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@ObjectType()
@Entity('users')
export class User {
  @Field({ nullable: true })
  @ObjectIdColumn()
  _id: string;

  @Field({ nullable: true })
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column({ select: false })
  password: string;

  @Field({ nullable: true })
  token?: string;
}
