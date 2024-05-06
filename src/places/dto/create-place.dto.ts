import { IsNotEmpty, IsString } from 'class-validator';


export class CreatePlaceDto {
    @IsString()
    @IsNotEmpty()
    googlePlaceId: string;
    location: Location;
    address: string;
    number: string;
    region: string;
    city: string;
    country: string;
}