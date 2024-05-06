import { IsNotEmpty, IsString } from 'class-validator';


export class CreateAnimalDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    name: boolean;
    ownerId: boolean;
    weight: number;
    birthDate: Date;
    imageUrl: string;
}