import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [ProductModule],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}
