import { Module } from '@nestjs/common';
import { UtmService } from './utm.service';
import { UtmController } from './utm.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { utmProviders } from './utm.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [UtmController],
  providers: [...utmProviders, UtmService],
})
export class UtmModule {}
