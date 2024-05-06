import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Gender } from './gender';

@Table({
    tableName: 'users',
    timestamps: false
})
export class User extends Model {
    @PrimaryKey
    @ForeignKey(() => User)
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