import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { Place } from './place.model';
import { PlacesService } from './places.service';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('places')
export class PlacesController {
    constructor(private readonly placesService: PlacesService) { }

    // POST <url>/places/
    @Post()
    create(@Body() createPlaceDto: CreatePlaceDto): Promise<Place> {
        console.log(createPlaceDto);
        return this.placesService.create(createPlaceDto);
    }

    // GET <url>/places/
    @Get()
    findAll(): Promise<Place[]> {
        return this.placesService.findAll();
    }

    // GET <url>/places/<id>/
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Place> {
        return this.placesService.findOne(id);
    }

    // DELETE <url>/places/<id>/
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.placesService.remove(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
        return this.placesService.update(id, updatePlaceDto);
    }
}