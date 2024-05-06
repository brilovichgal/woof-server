import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { Animal } from './animal.model';
import { AnimalsService } from './animals.service';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('animals')
export class AnimalsController {
    constructor(private readonly animalsService: AnimalsService) { }

    // POST <url>/animals/
    @Post()
    create(@Body() createAnimalDto: CreateAnimalDto): Promise<Animal> {
        console.log(createAnimalDto);
        return this.animalsService.create(createAnimalDto);
    }

    // GET <url>/animals/
    @Get()
    findAll(): Promise<Animal[]> {
        return this.animalsService.findAll();
    }

    // GET <url>/animals/<id>/
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Animal> {
        return this.animalsService.findOne(id);
    }

    // DELETE <url>/animals/<id>/
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.animalsService.remove(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
        return this.animalsService.update(id, updateAnimalDto);
    }
}