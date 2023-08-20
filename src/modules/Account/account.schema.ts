import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model,   } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import { sequelizeBase } from "src/config/sequezile.config";
import { AccountModel } from "src/models/AccountModel/AccountModel";


export const accountModel = sequelizeBase.define<AccountModel>('accounts', {
   id :{
     type: DataTypes.NUMBER,
     primaryKey: true,
     autoIncrement: true,
   },
  name: {
     type: DataTypes.STRING,
  },
   email: {
     type: DataTypes.STRING,
     unique:true,
   },
    password : {
       type: DataTypes.STRING
    },
    phone : {
       type: DataTypes.NUMBER
    },
     role: {
       type: DataTypes.NUMBER
     }
},
 {
   timestamps: false
 })
