// Configuration
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  useFactory: () => {
    return {
      type: 'mongodb',
      url: process.env.MONGO_URL,
      database: process.env.MONGO_DB,
      autoLoadEntities: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      logging: true,
      synchronize: true,
    };
  },
};

export const graphQLConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  formatError: (error) => {
    const graphQLFormattedError = {
      message: error.message,
      errors: error?.extensions?.response,
      code: error.extensions?.code,
      // original: error
    };
    return graphQLFormattedError;
  },
};
