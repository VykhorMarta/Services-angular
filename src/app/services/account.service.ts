import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AccountService {
    constructor(private loggingService: LoggingService){
    }
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      getAccounts() {
          return this.accounts;
      }

      setStutus(id: number, status: string){
          this.accounts[id].status = status;
          this.loggingService.logStatusChange(status);
      }

      addAccount(name: string, status: string){
          this.accounts.push({name: name, status: status})
          console.log('New account ' + name + '. Status: ' + status)

      }
}