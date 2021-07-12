import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodModule } from './food/food.module';


@Module({
  imports: [

    ConfigModule.forRoot({isGlobal: true}),

    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.DATABASE_HOST,
    //   port: parseInt(<string>process.env.DATABASE_PORT),
    //   database: process.env.DATABASE_NAME,
    //   username: process.env.DATABASE_USERNAME,
    //   password: process.env.DATABASE_PASSWORD,
    //   autoLoadEntities: true,
    //   synchronize: true
    // }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "ec2-3-231-69-204.compute-1.amazonaws.com",
      port: 5432,
      database: "d3nem2ave0gnsa",
      username: "phedxikbxfvbtx",
      password: "11d2e52a74f7c0be4f9d6e329df2679b5f41a0a01a43fb5ebd67c7db043b8ada",
      autoLoadEntities: true,
      synchronize: true
    }),

    FoodModule,

  ],
})
export class AppModule {}
