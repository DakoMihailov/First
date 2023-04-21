// Module - App
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Typeorm and GraphQL configuration
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig, graphQLConfig } from './config';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    GraphQLModule.forRoot(graphQLConfig),
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
