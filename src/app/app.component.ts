import { Component, OnInit } from '@angular/core';
import { initialBarData } from './utils/barHelper';

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
}
