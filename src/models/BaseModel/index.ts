import { Model } from "sequelize";

export interface BaseModel extends Model {
  id?: number;
}
