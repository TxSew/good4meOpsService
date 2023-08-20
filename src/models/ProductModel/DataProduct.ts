import { ProductModel } from "./ProductModel";

export interface DataProduct {
     data: ProductModel[];
     totalPages: number;
     page: number;
     pageSize:number
}