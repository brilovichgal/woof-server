import { IsNotEmpty, IsString } from 'class-validator';


export class CreateReviewDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    reviewText: string;
    rating: number;
    consumerId: string;
    providerId: string;
}