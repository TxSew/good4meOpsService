import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly Product: ProductService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.Product.product();
  }
}
