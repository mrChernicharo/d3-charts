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
  title = 'D3 Charts';
  carsData: ICar[] = initialCars;

  constructor() {}

  ngOnInit() {}
}
