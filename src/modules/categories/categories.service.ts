import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';
import { Category } from './interfaces/categories.interface';

@Injectable()
export class CategoriesService {

  constructor(
    @Inject('CATEGORIES_MODEL')
    private readonly categoriesModel:Model<Category>
  ){};

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoriesModel.create(createCategoryDto);
  }

  findAll() {
    return this.categoriesModel.find();
  }

  findOne(id: string) {
    return this.categoriesModel.findById(id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesModel.findByIdAndUpdate(id, updateCategoryDto);
  }

  remove(id: string) {
    return this.categoriesModel.findByIdAndDelete(id);
  }
}
