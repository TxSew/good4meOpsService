import { Controller, Get, Post, Body , Delete , Param , Put, HttpCode , Query} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductModel } from 'src/models/ProductModel/ProductModel';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DataProduct } from 'src/models/ProductModel/DataProduct';

@Controller('products')
@ApiTags('Products') 
export class ProductsController {
  constructor(private productService: ProductService) {}


  @Get(':id')
  getProduct(@Param('id') id: number): Promise<ProductModel> {
    return this.productService.getProduct(id);
  }

  @Post('store')
  @ApiOperation({summary:'Create a new product'})
  @ApiCreatedResponse({ description: 'The cat has been successfully created.' })
  create( @Body() data:ProductModel):  Promise<ProductModel> {
   console.log(data);
   return this.productService.create(data);
  }

  @Post()
  getProducts(@Body() props:{page:number,pageSize: number}): Promise<DataProduct> {
    console.log(props);
    return this.productService.getAll(props.page, props.pageSize);
  }
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
     return this.productService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data:ProductModel){
    return this.productService.update(id, data);
  }


}
