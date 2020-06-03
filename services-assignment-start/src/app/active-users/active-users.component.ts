import { UsersService } from "./../usersservice.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent {
  activeusers = [];

  constructor(private usersservice: UsersService) {
    this.activeusers = usersservice.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersservice.setAsInactive(id);
  }
}
