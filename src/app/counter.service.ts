import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Counter} from './counter';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CounterService {

  constructor(private http: HttpClient) { }
  
  baseUrl = 'https://lp4asgadot.herokuapp.com/counters/'
  allurl = "https://lp4asgadot.herokuapp.com/counters.json"

  reset() {
  }

  /*increment(position: number): number {
    this.initialValue[position]++;
    return this.initialValue[position];
  } */

  increment(id:number): Observable<Counter>{
    
    this.httpClient.patch(this.baseUrl+id+".json",{"value" : 1}).subscribe();
    return this.httpClient.get<Counter>(this.baseUrl+id+".json");
  }

  getCounter(id: number): Observable<Counter> {
  return this.httpClient.get<Counter>(this.baseUrl+id+".json")
  }

  getCounters(): Observable<Counter[]> {
  return this.httpClient.get<Counter[]>(this.allurl);
  }

}
