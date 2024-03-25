import { Inject, Injectable } from '@nestjs/common';
import { CreateUtmDto } from './dto/create-utm.dto';
import { UpdateUtmDto } from './dto/update-utm.dto';
import { Model } from 'mongoose';
import { Utm } from './interfaces/utm.interface';

@Injectable()
export class UtmService {

  constructor(
    @Inject('UTM_MODEL')
    private readonly utmModel:Model<Utm>
  ){};

  create(createUtmDto: CreateUtmDto) {
    return this.utmModel.create(createUtmDto);
  }

  findAll() {
    return this.utmModel.find();
  }

  update(id: string, updateUtmDto: UpdateUtmDto) {
    return this.utmModel.findByIdAndUpdate(id, updateUtmDto);
  }

}
