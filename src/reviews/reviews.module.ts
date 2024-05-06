import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from './review.model';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';

@Module({
    imports: [SequelizeModule.forFeature([Review])],
    providers: [ReviewsService],
    controllers: [ReviewsController],
})

export class ReviewsModule { }