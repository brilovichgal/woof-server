import { CreateTreatmentDto } from './create-treatment.dto';

export type UpdateTreatmentDto = Partial<Omit<CreateTreatmentDto, 'id'>>