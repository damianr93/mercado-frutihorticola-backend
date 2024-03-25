import { PartialType } from '@nestjs/swagger';
import { CreateFormFOneDto } from './create-form-f-one.dto';

export class UpdateFormFOneDto extends PartialType(CreateFormFOneDto) {}
