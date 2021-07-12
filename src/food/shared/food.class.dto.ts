import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class Food {

    id?: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    cal: number;

    @IsNumber()
    carbs: number;

    @IsNumber()
    proteins: number;

    @IsNumber()
    fats: number;

    @IsNumber()
    sodium: number;

    @IsNumber()
    dose: number;

}