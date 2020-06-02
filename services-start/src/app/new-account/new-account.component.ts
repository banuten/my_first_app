import { AccountsService } from "./../accounts.service";
import { LoggingService } from "./../logging.service";
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
})
export class NewAccountComponent {
  constructor(
    private loggingservice: LoggingService,
    private accountsservice: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsservice.addAccount(accountName, accountStatus);
    this.loggingservice.logStatusChange(accountStatus);
  }
}
