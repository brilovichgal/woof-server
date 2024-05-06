import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    name: string
    @Type(() => Date)
    @IsDate()
    birthDate: Date
    email: string
    phoneNumber: string
    googlePlaceId: string
    imageUrl: string;
}