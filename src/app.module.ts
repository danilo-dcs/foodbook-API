import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodModule } from './food/food.module';


@Module({
  imports: [

    ConfigModule.forRoot({isGlobal: true}),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || process.env.DATABASE_LOCAL_HOST,
      port: 5432,
      database: process.env.DATABASE || process.env.DATABASE_LOCAL,
      username: process.env.DATABASE_USER || process.env.DATABASE_LOCAL_USER  ,
      password: process.env.DATABASE_PASSWORD || process.env.DATABASE_LOCAL_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),

    FoodModule,

  ],
})
export class AppModule {}
