import { Component, Input, OnInit } from '@angular/core';

export interface TimeData {
  title: string
  timeframes: {
    daily: {
      current: number,
      previous: number
    },
    weekly: {
      current: number,
      previous: number
    },
    monthly: {
      current: number,
      previous: number
    }
  }
}

@Component({
  selector: 'time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.scss']
})
export class TimeCardComponent implements OnInit {
@Input() timeData!: TimeData;

  constructor() { }

  ngOnInit(): void {
  }

}
