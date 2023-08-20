import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model,   } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import { sequelizeBase } from "src/config/sequezile.config";
import { ProductModel } from "src/models/ProductModel/ProductModel";

export const productModel = sequelizeBase.define<ProductModel>('products', {
   id :{
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true,
   },
   category: {
    type: DataTypes.STRING
   },
    price : {
       type: DataTypes.FLOAT
    },
    title : {
       type: DataTypes.STRING
    },
},
 {
   timestamps: false
 })
