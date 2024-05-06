import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { Treatment } from './treatment.model';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';

@Injectable()
export class TreatmentsService {
    constructor(
        @InjectModel(Treatment)
        private readonly treatmentModel: typeof Treatment,
    ) { }

    create(createTreatmentDto: CreateTreatmentDto): Promise<Treatment> {
        return this.treatmentModel.create({ ...createTreatmentDto });
    }

    update(id: string, updateTreatmentDto: UpdateTreatmentDto): Promise<[number]> {
        return this.treatmentModel.update({ ...updateTreatmentDto }, { where: { id } });
    }

    async findAll(): Promise<Treatment[]> {
        return this.treatmentModel.findAll();
    }

    findOne(id: string): Promise<Treatment> {
        return this.treatmentModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const treatment = await this.findOne(id);
        await treatment.destroy();
    }
}