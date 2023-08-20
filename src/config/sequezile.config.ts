import { Sequelize } from "sequelize";


export const sequelizeBase = new Sequelize("db_shop", "root", "", {
  host: "localhost",
  dialect: "mysql",
});