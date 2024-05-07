import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Location } from './dto/Location';

@Table({
    tableName: 'places',
    timestamps: false
})
export class Place extends Model {
    @PrimaryKey
    // @ForeignKey(() => Place)
    @Column
    googlePlaceId: string;

    @Column({ type: DataType.JSONB, })
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