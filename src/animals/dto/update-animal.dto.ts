import { CreateAnimalDto } from './create-animal.dto';

export type UpdateAnimalDto = Partial<Omit<CreateAnimalDto, 'id'>>