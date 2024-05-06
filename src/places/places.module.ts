import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Place } from './place.model';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';

@Module({
    imports: [SequelizeModule.forFeature([Place])],
    providers: [PlacesService],
    controllers: [PlacesController],
})

export class PlacesModule { }