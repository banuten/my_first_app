import { UsersService } from "./../usersservice.service";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent {
  inactiveusers = [];

  constructor(private usersservice: UsersService) {
    this.inactiveusers = usersservice.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersservice.setAsActive(id);
  }
}
