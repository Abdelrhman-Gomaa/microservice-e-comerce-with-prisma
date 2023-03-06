import { CATEGORY_BOARD, PRODUCT_BOARD, SUB_CATEGORY_BOARD, CREATE_CATEGORY, CREATE_PRODUCT, CREATE_SUB_CATEGORY } from './patterns/product.pattern';
import { Controller } from '@nestjs/common';
import { MessagePattern, Ctx, RmqContext, Payload } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { CategoryCreateInput, SubCategoryCreateInput } from './product/input/category.create.input';
import { ProductCreateInput } from './product/input/product-create.input';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @MessagePattern({cmd: CATEGORY_BOARD})
    async categoryBoard() {
        return await this.productService.categoryBoard();
    }

    @MessagePattern({cmd: PRODUCT_BOARD})
    async productBoard() {
        return await this.productService.productBoard();
    }

    @MessagePattern({cmd: SUB_CATEGORY_BOARD})
    async subCategoryBoard() {
        return await this.productService.subCategoryBoard();
    }

    @MessagePattern({cmd: CREATE_CATEGORY})
    async createCategoryBoard(@Payload() input: CategoryCreateInput) {
        return await this.productService.createCategoryBoard(input);
    }

    @MessagePattern({cmd: CREATE_PRODUCT})
    async createProductBoard(@Payload() input: ProductCreateInput) {
        return await this.productService.createProductBoard(input);
    }

    @MessagePattern({cmd: CREATE_SUB_CATEGORY})
    async createSubCategoryBoard(@Payload() input: SubCategoryCreateInput) {
        return await this.productService.createSubCategoryBoard(input);
    }
    
}