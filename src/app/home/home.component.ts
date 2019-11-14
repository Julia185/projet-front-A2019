import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title = 'counters';
  counters: Array<Counter> = [];

  constructor( private counterService: CounterService ) { }

  ngOnInit() {
    this.counterService.getCounters()
      .subscribe((_counters) => {
        _counters.forEach((_counter) => {
          this.counters.push(_counter);
        });
      });
    console.log(this.counters);
  }

  reset() {
    this.counterService.reset()
  }
}
