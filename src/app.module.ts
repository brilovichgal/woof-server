import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ProvidersModule } from './providers/providers.module';
import { TreatmentsModule } from './treatments/treatments.module';
import { AnimalsModule } from './animals/animals.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'postgres',
    autoLoadModels: true,
  }),
    UsersModule,
    ProvidersModule,
    TreatmentsModule,
    AnimalsModule,
    ReviewsModule,
    PlacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
