import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { Provider } from './provider.model';
import { ProvidersService } from './providers.service';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Controller('providers')
export class ProvidersController {
    constructor(private readonly providersService: ProvidersService) { }

    // POST <url>/providers/
    @Post()
    create(@Body() createProviderDto: CreateProviderDto): Promise<Provider> {
        console.log(createProviderDto);
        return this.providersService.create(createProviderDto);
    }

    // GET <url>/providers/
    @Get()
    findAll(): Promise<Provider[]> {
        return this.providersService.findAll();
    }

    // GET <url>/providers/<id>/
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Provider> {
        return this.providersService.findOne(id);
    }

    // DELETE <url>/providers/<id>/
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.providersService.remove(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProviderDto: UpdateProviderDto) {
        return this.providersService.update(id, updateProviderDto);
    }
}