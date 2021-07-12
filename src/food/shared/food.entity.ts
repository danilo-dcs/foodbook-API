import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('food')
export class FoodEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('float', { default: 0 })
    cal: number;

    @Column('float', { default: 0 } )
    carbs: number;

    @Column( 'float', { default: 0 } )
    proteins: number;

    @Column( 'float', { default: 0 } )
    fats: number;

    @Column('float', { default: 0 } )
    sodium: number;

    @Column('int')
    dose: number;

}