import { Module } from '@nestjs/common';
import { RemitoService } from './remito.service';
import { RemitoController } from './remito.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { remitoProviders } from './remito.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [RemitoController],
  providers: [...remitoProviders, RemitoService],
})
export class RemitoModule {}
