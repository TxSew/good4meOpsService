import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountModel } from 'src/models/AccountModel/AccountModel';
import { ApiTags } from '@nestjs/swagger';


@Controller('accounts')
@ApiTags('Accounts') 
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
   @Get()
   getAccount(): Promise<AccountModel[]> {
     return this.accountService.getAccount();
   }
   @Post()
   createAccount( @Body() account: AccountModel): Promise<AccountModel> {
     return this.accountService.createAccount(account);
   }
    

}
