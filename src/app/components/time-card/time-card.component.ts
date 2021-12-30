import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Data {
  current: number
  previous: number
}

export interface TimeData {
  title: string
  timeframes: {
    daily: Data,
    weekly: Data,
    monthly: Data
  }
}

@Component({
  selector: 'time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.scss']
})
export class TimeCardComponent implements OnInit {
@Input() timeData!: any;
data!: Data;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
      this.route.queryParamMap.subscribe(params => {
      const timeframe = params.get('timeframe');
      if (!timeframe) this.data = this.timeData.timeframes.daily;

      else if (timeframe == 'daily') {
        this.data = this.timeData.timeframes.daily
      } else if (timeframe == 'weekly') {
        this.data = this.timeData.timeframes.weekly
      } else if (timeframe == 'monthly') {
        this.data = this.timeData.timeframes.monthly
      }
    })
  }

}
