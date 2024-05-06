import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Animal } from './animal.model';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';

@Module({
    imports: [SequelizeModule.forFeature([Animal])],
    providers: [AnimalsService],
    controllers: [AnimalsController],
})

export class AnimalsModule { }