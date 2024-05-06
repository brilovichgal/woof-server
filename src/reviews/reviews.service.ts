import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.model';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectModel(Review)
        private readonly reviewModel: typeof Review,
    ) { }

    create(createReviewDto: CreateReviewDto): Promise<Review> {
        return this.reviewModel.create({ ...createReviewDto });
    }

    update(id: string, updateReviewDto: UpdateReviewDto): Promise<[number]> {
        return this.reviewModel.update({ ...updateReviewDto }, { where: { id } });
    }

    async findAll(): Promise<Review[]> {
        return this.reviewModel.findAll();
    }

    findOne(id: string): Promise<Review> {
        return this.reviewModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const review = await this.findOne(id);
        await review.destroy();
    }
}