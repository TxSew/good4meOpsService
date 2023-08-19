import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}
  @Get()
  getProducts(): string {
    return this.productService.getHello();
  }

  @Post()
  create(): void {
    return this.productService.create();
  }
}
