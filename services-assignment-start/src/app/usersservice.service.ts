import { CounterService } from "./counterservice.service";
import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  constructor(private countersservice: CounterService) {}

  setAsInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countersservice.incrementCounter();
  }

  setAsActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countersservice.incrementCounter();
  }
}
