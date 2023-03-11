import { Injectable } from '@nestjs/common';
import { PrismaServiceProduct } from './prisma/prisma.service.product';
import { CategoryCreateInput, ProductForOneCategoryInput, SubCategoryCreateInput } from './product/input/category.create.input';
import { ProductCreateInput } from './product/input/product-create.input';

@Injectable()
export class ProductService {

  constructor(
    private readonly prisma: PrismaServiceProduct,
  ) { }

  async createProductBoard(input: ProductCreateInput) {
    await this.categoryIsExist(input.categoryId);
    return await this.prisma.product.create({
      data: {
        title: input.title,
        price: input.price,
        color: input.color,
        quantity: input.quantity,
        description: input.description,
        instructions: input.instructions,
        construction: {
          generalDimensions: input.generalDimensions,
          delivery: input.delivery,
          material: input.material
        },
        categoryId: input.categoryId,
      }
    });
  }

  async createCategoryBoard(input: CategoryCreateInput) {
    return await this.prisma.category.create({ data: { ...input } });
  }

  async createSubCategoryBoard(input: SubCategoryCreateInput) {
    await this.categoryIsExist(input.categoryId);
    return await this.prisma.subCategory.create({ data: { ...input } });
  }

  async productForOneCategory(input: ProductForOneCategoryInput) {
    return await this.prisma.product.findMany({ where: { categoryId: input.id } });
  }

  async subCategoryForOneCategory(input: ProductForOneCategoryInput) {
    return await this.prisma.subCategory.findMany({ where: { categoryId: input.id } });
  }

  async productBoard() {
    return await this.prisma.product.findMany();
  }

  async categoryBoard() {
    return await this.prisma.category.findMany();
  }

  async subCategoryBoard() {
    return await this.prisma.subCategory.findMany();
  }

  async productForOneCart(ids: string[]) {
    return await this.prisma.product.findMany({ where: { id : {in: ids }} });
  }

  private async categoryIsExist(categoryId: string) {
    const categoryExist = await this.prisma.category.findFirst({ where: { id: categoryId } });
    if (!categoryExist) throw new Error(`Cannot find category with Id ${categoryId}`);
    return categoryExist;
  }

}
