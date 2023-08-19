import { BaseModel } from '../BaseModel';

export interface ProductModel extends BaseModel {
  categories?: string;
  description?: string;
  price?: number;
  title?: string;
}
