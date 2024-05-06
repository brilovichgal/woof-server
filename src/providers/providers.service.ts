import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProviderDto } from './dto/create-provider.dto';
import { Provider } from './provider.model';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Injectable()
export class ProvidersService {
    constructor(
        @InjectModel(Provider)
        private readonly providerModel: typeof Provider,
    ) { }

    create(createProviderDto: CreateProviderDto): Promise<Provider> {
        return this.providerModel.create({ ...createProviderDto });
    }

    update(id: string, updateProviderDto: UpdateProviderDto): Promise<[number]> {
        return this.providerModel.update({ ...updateProviderDto }, { where: { id } });
    }

    async findAll(): Promise<Provider[]> {
        return this.providerModel.findAll();
    }

    findOne(id: string): Promise<Provider> {
        return this.providerModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const provider = await this.findOne(id);
        await provider.destroy();
    }
}