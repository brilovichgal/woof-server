import { IsNotEmpty, IsString } from 'class-validator';
import { EService } from '../EService';


export class CreateProviderDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    isHasExperience: boolean;
    isHasProfessionalExperience: boolean;
    services: EService[];
    content: string
    experienceContent: string
    professionalExperiences: string[];
}