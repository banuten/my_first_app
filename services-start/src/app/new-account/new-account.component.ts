import { AccountsService } from "./../accounts.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
})
export class NewAccountComponent {
  constructor(private accountsservice: AccountsService) {
    this.accountsservice.statusUpdated.subscribe((status: string) =>
      alert("New Status: " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsservice.addAccount(accountName, accountStatus);
  }
}
