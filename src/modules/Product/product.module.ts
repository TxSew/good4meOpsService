import { Module } from "@nestjs/common";
import { ProductsController } from "./product.controller";
import { ProductService } from "./product.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { productModel } from "./product.schema";

@Module({
  imports: [
    SequelizeModule.forFeature([productModel]),
    ProductModule],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}
