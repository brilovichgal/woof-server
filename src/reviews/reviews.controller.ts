import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.model';
import { ReviewsService } from './reviews.service';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) { }

    // POST <url>/reviews/
    @Post()
    create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
        console.log(createReviewDto);
        return this.reviewsService.create(createReviewDto);
    }

    // GET <url>/reviews/
    @Get()
    findAll(): Promise<Review[]> {
        return this.reviewsService.findAll();
    }

    // GET <url>/reviews/<id>/
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Review> {
        return this.reviewsService.findOne(id);
    }

    // DELETE <url>/reviews/<id>/
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.reviewsService.remove(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
        return this.reviewsService.update(id, updateReviewDto);
    }
}