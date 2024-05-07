import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
    tableName: 'reviews',
    timestamps: false
})
export class Review extends Model {
    @PrimaryKey
    // @ForeignKey(() => Review)
    @Column
    id: string;

    @Column
    reviewText: string;

    @Column
    rating: number

    @Column
    consumerId: string;

    @Column
    providerId: string;
}