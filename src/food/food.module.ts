import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodController } from './food.controller';
import { FoodEntity } from './shared/food.entity';
import { FoodService } from './food.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([FoodEntity])
  ],

  controllers: [
    FoodController
  ],

  providers: [
    FoodService
  ]

})
export class FoodModule {}
