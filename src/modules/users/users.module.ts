import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { usersProviders } from './users.providers';
import { Jwt } from 'src/services/jwt/jwt.module';


@Module({
  imports: [DatabaseModule, Jwt],
  controllers: [UsersController],
  providers: [
    ...usersProviders,
    UsersService,
  ],
})
export class UsersModule {}
