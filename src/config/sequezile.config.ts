import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

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
    // UserModule, // Include your module here
  ],
})
export class APiModule {}
