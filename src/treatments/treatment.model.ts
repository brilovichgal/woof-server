import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
    tableName: 'treatments',
    timestamps: false
})
export class Treatment extends Model {
    @PrimaryKey
    // @ForeignKey(() => Treatment)
    @Column
    id: string;

    @Column
    personalMessage: string;

    @Column
    animalId: string;

    @Column
    providerId: string

    @Column
    status: string

    @Column
    startDate: string;

    @Column
    endDate: string;

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        defaultValue: [],
    })
    hours: string[];
}