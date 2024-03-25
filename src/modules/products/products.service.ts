import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { Product } from './interfaces/products.interface';

@Injectable()
export class ProductsService {

  constructor(
    @Inject('PRODUCTS_MODEL')
    private readonly productModel: Model<Product>
  ) { }

  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }

  findAll() {
    return this.productModel.find()
      .populate('category');
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto);
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
