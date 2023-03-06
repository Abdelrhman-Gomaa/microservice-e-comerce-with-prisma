import { Product } from './product/model/product.model';
import { Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';

@Resolver(Product)
export class ProductResolver {
    constructor(
        private readonly productService: ProductService
    ) { }

    
}