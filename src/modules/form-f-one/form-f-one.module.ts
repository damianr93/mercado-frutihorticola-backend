import { Module } from '@nestjs/common';
import { FormFOneService } from './form-f-one.service';
import { FormFOneController } from './form-f-one.controller';
import { formFOneProviders } from './form-f-one.providers';
import { DatabaseModule } from 'src/services/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [FormFOneController],
  providers: [...formFOneProviders,FormFOneService],
})
export class FormFOneModule {}
