import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { Animal } from './animal.model';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class AnimalsService {
    constructor(
        @InjectModel(Animal)
        private readonly animalModel: typeof Animal,
    ) { }

    create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
        return this.animalModel.create({ ...createAnimalDto });
    }

    update(id: string, updateAnimalDto: UpdateAnimalDto): Promise<[number]> {
        return this.animalModel.update({ ...updateAnimalDto }, { where: { id } });
    }

    async findAll(): Promise<Animal[]> {
        return this.animalModel.findAll();
    }

    findOne(id: string): Promise<Animal> {
        return this.animalModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const animal = await this.findOne(id);
        await animal.destroy();
    }
}