import { AccountsService } from "./../accounts.service";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private accountsservice: AccountsService) {}

  onSetTo(status: string) {
    this.accountsservice.updateStatusChanged(this.id, status);
    this.accountsservice.statusUpdated.emit(status);
  }
}
