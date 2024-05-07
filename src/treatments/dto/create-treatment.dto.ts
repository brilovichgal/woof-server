import { IsNotEmpty, IsString } from 'class-validator';


export class CreateTreatmentDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    personalMessage: boolean;
    animalId: boolean;
    providerId: string;
    status: string;
    startDate: string;
    endDate: string;
    hours: string[];
}