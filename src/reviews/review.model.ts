import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
    tableName: 'places',
    timestamps: false
})
export class Review extends Model {
    @PrimaryKey
    // @ForeignKey(() => Review)
    @Column
    id: string;

    @Column
    placeText: string;

    @Column
    rating: number

    @Column
    consumerId: string;

    @Column
    providerId: string;
}