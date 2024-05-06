import { CreatePlaceDto } from './create-place.dto';

export type UpdatePlaceDto = Partial<Omit<CreatePlaceDto, 'googlePlaceId'>>