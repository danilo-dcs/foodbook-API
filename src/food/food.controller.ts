import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { FoodService } from './food.service';
import { Food } from './shared/food.class.dto';

@Controller('food')
export class FoodController {

    constructor(private foodService: FoodService){}

    @Get()
    async getAll(): Promise<Food[]> {
        return await this.foodService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Food> {
        return await this.foodService.getById(id);
    }

    @Post()
    async create( @Body() foodPayload: Food ) {
        await this.foodService.create(foodPayload);
    }

    @Put(':id')
    async update( @Param('id') id: number , @Body() foodPayload: Food ) {
        return await this.foodService.update(id, foodPayload);
    }
   
    @Delete(':id')
    async delete( @Param('id') id: number ) {
        await this.foodService.delete(id);
    }

}
