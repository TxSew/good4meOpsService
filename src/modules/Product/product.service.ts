import { Injectable, NotFoundException, Res } from "@nestjs/common";
import { ProductModel } from "src/models/ProductModel/ProductModel";
import { productModel } from "./product.schema";
import { DataProduct } from "src/models/ProductModel/DataProduct";

@Injectable()
export class ProductService {
  async getAll(page: number, pageSize: number): Promise<DataProduct> {
     const currentSize = pageSize ?? 1
    const offset = ((page - 1) * pageSize) ?? 2;
    try {
      const data = await productModel.findAll({
        limit: currentSize,
        offset: offset,
      });
      const totalItems =   await productModel.count() // Assuming productModel is your Sequelize model
       console.log(totalItems);
      const totalPages =  Math.ceil(totalItems / pageSize);
       console.log('totalPages: ', totalPages);
       
      const resultdata = {
        data: data,
        totalPages: totalPages,
        page: page,
        pageSize: currentSize,
      }
       console.log(resultdata);
       
       return resultdata;
    } catch (error) {
      console.log(error);
    }
  }
  async getProduct(id: number): Promise<ProductModel> {
    try {
      return productModel.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  }
  async create(tasks: Partial<ProductModel>): Promise<ProductModel> {
    return productModel.create(tasks);
  }
  async remove(id: number): Promise<void> {
    console.log("id", id);
    const product = await productModel.findOne({ where: { id: id } });
    console.log(product);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    } else {
      await product.destroy().then((response) => {
        return response;
      });
    }
  }
  async update(id: number, product: ProductModel) {
    console.log(id);
    console.log(product);
    try {
      return productModel.update(product, { where: { id: id } });
    } catch (error) {
      console.log(error);
    }
  }
}
