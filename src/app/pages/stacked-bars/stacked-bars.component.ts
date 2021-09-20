import { Component, HostListener, OnInit } from '@angular/core';
import { initialStackedBars, stackedBarFactory } from '../../utils/stackedBarsHelper';
@Component({
  selector: 'app-stacked-bars',
  templateUrl: './stacked-bars.component.html',
  styleUrls: ['./stacked-bars.component.scss'],
})
export class StackedBarsComponent implements OnInit {
  title = 'Stacked Areas';
  data = [];
  windowWidth = 0;
  chartMargins = 0;

  constructor() {}

  ngOnInit(): void {
    this.data = initialStackedBars;

    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.windowWidth = window.innerWidth;
    this.chartMargins = this.windowWidth < 500 ? 0 : 50;
  }

  addItem() {
    const newData = stackedBarFactory();
    this.data = [...this.data, newData];
  }
  popItem() {
    this.data = [...this.data];
    console.log(this.data);
  }
}
