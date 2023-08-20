/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/Product/product.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsController } from './modules/Product/product.controller';
import { ProductService } from './modules/Product/product.service';
import { AccountController } from './modules/Account/account.controller';
import { AccountService } from './modules/Account/account.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_shop',
      autoLoadModels: true, // Automatically load models from the 'models' folder
      synchronize: true, // Auto-create and update database tables (not recommended for production)
    }),
  ],
  controllers: [AppController , ProductsController , AccountController],
  providers: [AppService,ProductService, AccountService],
})
export class AppModule {}
