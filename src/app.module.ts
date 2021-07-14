import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodModule } from './food/food.module';


@Module({
  imports: [

    ConfigModule.forRoot({isGlobal: true}),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(<string>process.env.DATABASE_PORT),
      database: process.env.DATABASE,
      username: process.env.DATABASE_USER  ,
      password: process.env.DATABASE_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),

    FoodModule,

  ],
})
export class AppModule {}
