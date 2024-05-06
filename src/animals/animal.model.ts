import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
    tableName: 'animals',
    timestamps: false
})
export class Animal extends Model {
    @PrimaryKey
    // @ForeignKey(() => Animal)
    @Column
    id: string;

    @Column
    name: string;

    @Column
    ownerId: string;

    @Column
    weight: number

    @Column
    birthDate: Date

    @Column
    imageUrl: string;
}