import { Component, OnInit } from '@angular/core';
import { initialBarData } from './utils/barHelper';
import { vehicle } from 'faker';

export interface IBarData {
  amount: number;
  value: number;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'd3-graphs';
  barData: IBarData[] = initialBarData;

  constructor() {}

  ngOnInit() {}

  addItem() {
    this.barData.push({
      description: vehicle.vehicle(),
      amount: Math.ceil(Math.random() * 10_000),
      value: Math.random() * 10_000_000,
    });
  }

  popItem() {
    this.barData.pop();
  }
}
