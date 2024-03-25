import { Inject, Injectable } from '@nestjs/common';
import { CreateFormFOneDto } from './dto/create-form-f-one.dto';
import { UpdateFormFOneDto } from './dto/update-form-f-one.dto';
import { Model } from 'mongoose';
import { FormFOne } from './interfaces/form-f-one.interface';

@Injectable()
export class FormFOneService {

  constructor(
    @Inject('FORMFONE_MODEL')
    private readonly formModel:Model<FormFOne>
  ){}

  create(createFormFOneDto: CreateFormFOneDto) {
    return this.formModel.create(createFormFOneDto);
  }

  findAll() {
    return this.formModel.find();
  }

  findOne(id: number) {
    return this.formModel.findById(id);
  }

  update(id: number, updateFormFOneDto: UpdateFormFOneDto) {
    return this.formModel.findByIdAndUpdate(id, updateFormFOneDto);
  }

  remove(id: number) {
    return this.formModel.findByIdAndDelete(id);
  }
}
