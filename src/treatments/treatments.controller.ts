import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { Treatment } from './treatment.model';
import { TreatmentsService } from './treatments.service';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';

@Controller('treatments')
export class TreatmentsController {
    constructor(private readonly treatmentsService: TreatmentsService) { }

    // POST <url>/treatments/
    @Post()
    create(@Body() createTreatmentDto: CreateTreatmentDto): Promise<Treatment> {
        console.log(createTreatmentDto);
        return this.treatmentsService.create(createTreatmentDto);
    }

    // GET <url>/treatments/
    @Get()
    findAll(): Promise<Treatment[]> {
        return this.treatmentsService.findAll();
    }

    // GET <url>/treatments/<id>/
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Treatment> {
        return this.treatmentsService.findOne(id);
    }

    // DELETE <url>/treatments/<id>/
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.treatmentsService.remove(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTreatmentDto: UpdateTreatmentDto) {
        return this.treatmentsService.update(id, updateTreatmentDto);
    }
}