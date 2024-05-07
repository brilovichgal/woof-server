import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { EService } from './EService';

@Table({
    tableName: 'providers',
    timestamps: false
})
export class Provider extends Model {
    @PrimaryKey
    @Column
    id: string;

    @Column
    isHasExperience: boolean;

    @Column
    isHasProfessionalExperience: boolean;

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    services: EService[];

    @Column
    content: string

    @Column
    experienceContent: string

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    professionalExperiences: string[];
}