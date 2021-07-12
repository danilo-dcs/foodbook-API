import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FoodEntity } from './shared/food.entity';
import { Food } from './shared/food.class.dto'



@Injectable()
export class FoodService {

    private logger = new Logger('FoodService');

    constructor(
        @InjectRepository(FoodEntity)
        private readonly foodRepository: Repository<FoodEntity>,
    ){}

    async getAll(): Promise<Food[]> {
        const response = await this.foodRepository.find();
        return response;
    }

    async getById(id: number): Promise<Food> {
        const response = await this.foodRepository.findOne({
            where: {id},
        });

        if(!response){
            this.logger.error(`Food with id '${id}' does not exist`);
            throw new HttpException(`Food with id '${id}' does not exist`, HttpStatus.NOT_FOUND);
        }
    
        return response;
    }

    async create(foodPost: Food){

        await this.foodRepository.save(foodPost);
        let msg = `Created`;
        throw new HttpException(msg, HttpStatus.CREATED);
        
    }

    async update(id: number, foodPost: Food) {
        
        const response = await this.getById(id);

        if(!response){
            let msg = `Food with id '${id}' does not exist`;
            this.logger.error(msg);
            throw new HttpException(`Food with id '${id}' does not exist`, HttpStatus.NOT_FOUND);
        }else{
            await this.foodRepository.update(id, foodPost);
            throw new HttpException(`Updated with success`, HttpStatus.ACCEPTED);
        }
    }

    async delete(id: number) {

        const response = await this.getById(id);

        if(!response){
            let msg = `Food with id '${id}' does not exist`;
            this.logger.error(msg);
            throw new HttpException(msg, HttpStatus.NOT_FOUND);
        }else{
            await this.foodRepository.delete(id);
            let msg = `Deleted with success`;
            throw new HttpException(msg, HttpStatus.OK);
        }
    }
}
