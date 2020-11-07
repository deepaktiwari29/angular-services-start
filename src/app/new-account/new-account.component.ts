import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';
import { strict } from 'assert';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers : [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService : LoggingService,
              private accounService : AccountService) {
                accounService.statusUpdated.subscribe(
                  (status : string) => alert('New Status : ' + status)
                );
              }

  onCreateAccount(accountName: string, accountStatus: string) {
    //this.loggingService.logStatusChange(accountStatus);
    this.accounService.addAccount(accountName, accountStatus);
  }
}
