import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {

  @Input() id : number;
  counter: Counter = new Counter();

  constructor(
    public counterService: CounterService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.getCounter();
  }

  getCounter() : void {
    this.route.params.subscribe(
      params => {
        this.counterService.getCounter(params['id'])
          .subscribe(counter => this.counter = counter);
      }
    );
  }

  increment() {
    this.counterService.increment(this.counter.id)
      .subscribe(counter => {
        this.counter.value = counter.value;
      });
  }

}