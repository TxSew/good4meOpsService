import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  @Get()
  product(): string {
    return 'Hello World';
  }
}
