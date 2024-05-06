import { CreateReviewDto } from './create-review.dto';

export type UpdateReviewDto = Partial<Omit<CreateReviewDto, 'id'>>