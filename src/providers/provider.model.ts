import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
    tableName: 'providers',
    timestamps: false
})
export class Provider extends Model {
    @PrimaryKey
    @ForeignKey(() => Provider)
    @Column
    id: string;

    @Column
    name: string

    @Column
    email: string

    @Column({ type: DataType.DATEONLY, })
    birthDate: Date

    @Column
    phoneNumber: string

    @Column
    googlePlaceId: string

    @Column
    imageUrl: string;
}