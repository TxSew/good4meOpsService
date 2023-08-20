import { Injectable } from '@nestjs/common';
import { AccountModel } from 'src/models/AccountModel/AccountModel';
import * as bcrypt from 'bcrypt';
import { accountModel } from './account.schema';
@Injectable()
export class AccountService {
  getAccount(): Promise<AccountModel[]> {
     return accountModel.findAll()
  }
   async createAccount(account: Partial<AccountModel>): Promise<AccountModel> {
      account.password = await bcrypt.hash(account.password, 10);
       return  accountModel.create(account)
  }
}
