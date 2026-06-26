import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (
        configService: ConfigService,
      ) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: Number(
          configService.get<string>('DB_PORT'),
        ),
        username:
          configService.get<string>('DB_USERNAME'),
        password:
          configService.get<string>('DB_PASSWORD'),
        database:
          configService.get<string>('DB_DATABASE'),
        entities: [
          __dirname + '/**/*.entity{.ts,.js}',
        ],
        synchronize: true,
        logging: true,
      }),
    }),

    TodosModule,
  ],
})
export class AppModule {}