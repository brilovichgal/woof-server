import { IsNotEmpty, IsString } from 'class-validator';


export class CreateProviderDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    isHasExperience: boolean;
    isHasProfessionalExperience: boolean;
    content: string
    experienceContent: string
}