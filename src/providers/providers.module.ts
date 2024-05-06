import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Provider } from './provider.model';
import { ProvidersController } from './providers.controller';
import { ProvidersService } from './providers.service';

@Module({
    imports: [SequelizeModule.forFeature([Provider])],
    providers: [ProvidersService],
    controllers: [ProvidersController],
})

export class ProvidersModule { }