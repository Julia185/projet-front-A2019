import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initiaValue = [12, 5, 18];

  constructor() { }

  reset() {
    this.initiaValue = [0, 0, 0];
  }

  increment(position: number): number {
    this.initiaValue[position]++;
    return this.initiaValue[position];
  }
}
