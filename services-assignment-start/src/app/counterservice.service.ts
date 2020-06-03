import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  c = 0;

  incrementCounter() {
    this.c++;
    console.log(this.c);
  }
}
