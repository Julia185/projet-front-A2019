import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {

  counter: Counter = new Counter();

  constructor(
    public counterService: CounterService,
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(
        () => {
          this.getCounters();
        }
      )
  }

  getCounters() {
    this.counter.id = +this.route.snapshot.paramMap.get('id'); 
    this.counterService.getCounters(this.counter.id)
      .subscribe(counter => {
        this.counter = counter;
      });
  }

  increment(){
    this.counterService.increment(this.counter.id)
      .subscribe(counter => {
        this.counter.value = counter.value;
      });
  }
}