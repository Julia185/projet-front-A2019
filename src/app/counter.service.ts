import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Counter} from './counter';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CounterService {
  //public initiaValue = [12, 5, 18];
  private counterUrl = 'https://lp4asgadot.herokuapp.com/counters/';
  private countersUrl = 'https://lp4asgadot.herokuapp.com/counters.json';

  constructor(private http: HttpClient) { }

  reset() {
    //this.initiaValue = [0, 0, 0];
  }

  /*increment(position: number): number {
    this.initialValue[position]++;
    return this.initialValue[position];
  } */

  increment(): Observable<Counter>{
    return this.http.patch<Counter>(this.counterUrl + id + '.json', {});
  }

  getCounter(id: number): Observable<Counter> {
    return this.http.get<Counter>(this.counterUrl + id + '.json');
  }

  getCounters(): Observable<Counter[]> {
    return this.http.get<Counter[]>(this.countersUrl);
  }
 
}
