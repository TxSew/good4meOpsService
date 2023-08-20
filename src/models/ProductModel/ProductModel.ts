import { Model } from 'sequelize';
import { BaseModel } from '../BaseModel';

export interface ProductModel extends Model, BaseModel {
  category?: string;
  price?: number;
  title?: string;
}
