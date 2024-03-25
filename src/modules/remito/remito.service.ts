import { Inject, Injectable } from '@nestjs/common';
import { CreateRemitoDto } from './dto/create-remito.dto';
import { UpdateRemitoDto } from './dto/update-remito.dto';
import { Model } from 'mongoose';
import { Remito } from './interfaces/remito.interface';

@Injectable()
export class RemitoService {

  constructor(
    @Inject('REMITO_MODEL')
    private readonly remitoModel:Model<Remito>  
  ){}
  
  create(createRemitoDto: CreateRemitoDto) {
    return this.remitoModel.create(createRemitoDto);
  }

  findAll() {
    return this.remitoModel.find();
  }

  findOne(id: string) {
    return this.remitoModel.findById(id);
  }

  update(id: string, updateRemitoDto: UpdateRemitoDto) {
    return this.remitoModel.findByIdAndUpdate(id, updateRemitoDto);
  }

  remove(id: string) {
    return this.remitoModel.findByIdAndDelete(id);
  }
}
