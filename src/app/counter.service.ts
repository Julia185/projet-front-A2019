import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Counter } from './counter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initiaValue = [12, 5, 18];

  constructor(private httpClient: HttpClient) { }

  reset() {
    this.initiaValue = [0, 0, 0];
  }

  increment(position: number): number {
    this.initiaValue[position]++;
    return this.initiaValue[position];
  }

  getCounterValue(id: number): Observable<Counter>  {
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/"+id+".json")
  }
}
