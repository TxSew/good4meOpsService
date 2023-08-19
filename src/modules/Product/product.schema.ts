import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column
  name: string;

  @Column(DataType.FLOAT)
  price: number;

  @Column(DataType.TEXT)
  description: string;
}
