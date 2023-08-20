import { BaseModel } from "../BaseModel";

export interface AccountModel extends BaseModel {
  email?: string;
  password?: string;
  name?: string;
  role?: number;
  phone?: number;
}
