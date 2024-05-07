import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePlaceDto } from './dto/create-place.dto';
import { Place } from './place.model';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {
    constructor(
        @InjectModel(Place)
        private readonly placeModel: typeof Place,
    ) { }

    create(createPlaceDto: CreatePlaceDto): Promise<Place> {
        return this.placeModel.create({ ...createPlaceDto });
    }

    update(googlePlaceId: string, updatePlaceDto: UpdatePlaceDto): Promise<[number]> {
        return this.placeModel.update({ ...updatePlaceDto }, { where: { googlePlaceId } });
    }

    async findAll(): Promise<Place[]> {
        return this.placeModel.findAll();
    }

    findOne(googlePlaceId: string): Promise<Place> {
        return this.placeModel.findOne({
            where: {
                googlePlaceId,
            },
        });
    }

    async remove(googlePlaceId: string): Promise<void> {
        const place = await this.findOne(googlePlaceId);
        await place.destroy();
    }
}