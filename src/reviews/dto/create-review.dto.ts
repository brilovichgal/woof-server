import { IsNotEmpty, IsString } from 'class-validator';


export class CreateReviewDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    reviewText: boolean;
    rating: number;
    consumerId: string;
    providerId: string;
}