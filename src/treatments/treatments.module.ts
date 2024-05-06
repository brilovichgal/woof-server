import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Treatment } from './treatment.model';
import { TreatmentsController } from './treatments.controller';
import { TreatmentsService } from './treatments.service';

@Module({
    imports: [SequelizeModule.forFeature([Treatment])],
    providers: [TreatmentsService],
    controllers: [TreatmentsController],
})

export class TreatmentsModule { }