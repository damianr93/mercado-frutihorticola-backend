import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { MyLogger } from './services/logger/logger';
import { JwtAuthGuard } from './services/jwt/jwt.guard';
import { JwtStrategy } from './services/jwt/jwt.strategy';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { UtmModule } from './modules/utm/utm.module';
import { FormFOneModule } from './modules/form-f-one/form-f-one.module';
import { RemitoModule } from './modules/remito/remito.module';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    UsersModule,
    CategoriesModule,
    ProductsModule,
    UtmModule,
    FormFOneModule,
    RemitoModule
  ],
  controllers: [AppController],
  providers: [MyLogger, AppService, JwtAuthGuard, JwtStrategy],
})
export class AppModule {}
