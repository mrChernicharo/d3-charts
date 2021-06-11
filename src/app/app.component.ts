import { Component, OnInit } from '@angular/core';
import { createItem, initialCars } from './utils/barHelper';
import { vehicle } from 'faker';

export interface ICar {
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
  barData: ICar[] = initialCars;

  constructor() {}

  ngOnInit() {}

  addItem() {
    this.barData = [...this.barData, createItem()];
  }

  popItem() {
    this.barData = [...this.barData.slice(0, this.barData.length - 1)];
  }
}
