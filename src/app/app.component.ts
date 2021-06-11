import { Component, OnInit } from '@angular/core';
import { createItem, initialBarData } from './utils/barHelper';
import { vehicle } from 'faker';

export interface IBarData {
  year: number;
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
    this.barData = [...this.barData, createItem()];
  }

  popItem() {
    this.barData = [...this.barData.slice(0, this.barData.length - 1)];
  }
}
