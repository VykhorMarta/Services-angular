import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logService: LoggingService, private accService: AccountService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accService.addAccount(accountName, accountStatus);
    // this.logService.logStatusChange(accountStatus);

  }
}
