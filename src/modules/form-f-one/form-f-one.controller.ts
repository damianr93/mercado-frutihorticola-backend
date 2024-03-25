import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormFOneService } from './form-f-one.service';
import { CreateFormFOneDto } from './dto/create-form-f-one.dto';
import { UpdateFormFOneDto } from './dto/update-form-f-one.dto';

@Controller('form-f-one')
export class FormFOneController {
  constructor(private readonly formFOneService: FormFOneService) {}

  @Post()
  create(@Body() createFormFOneDto: CreateFormFOneDto) {
    return this.formFOneService.create(createFormFOneDto);
  }

  @Get()
  findAll() {
    return this.formFOneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formFOneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormFOneDto: UpdateFormFOneDto) {
    return this.formFOneService.update(+id, updateFormFOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formFOneService.remove(+id);
  }
}
