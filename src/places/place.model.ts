import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
    tableName: 'places',
    timestamps: false
})
export class Place extends Model {
    @PrimaryKey
    // @ForeignKey(() => Place)
    @Column
    googlePlaceId: string;

    @Column
    location: Location;

    @Column
    address: string;

    @Column
    number: string;

    @Column
    region: string;

    @Column
    city: string;

    @Column
    country: string;
}