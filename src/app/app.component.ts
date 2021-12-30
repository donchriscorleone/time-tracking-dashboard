import { Component } from '@angular/core';
import * as datas from './data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-tracking-dashboard';
  times: any[] = [];

  constructor() {
    Object.keys(datas).forEach(key => {
      const index = parseInt(key);
      if (datas[index]) this.times.push(datas[index]);
    });
  }
}
