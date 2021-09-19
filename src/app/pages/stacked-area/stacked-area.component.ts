import { Component, HostListener, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { initialStackedData } from 'src/app/utils/StackedAreasHelper';

@Component({
  selector: 'app-stacked-area',
  templateUrl: './stacked-area.component.html',
  styleUrls: ['./stacked-area.component.scss'],
})
export class StackedAreaComponent implements OnInit {
  title = 'Stacked Areas';
  data = [];
  windowWidth = 0;
  chartMargins = 0;

  constructor() {}

  ngOnInit(): void {
    this.data = initialStackedData;

    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.windowWidth = window.innerWidth;
    this.chartMargins = this.windowWidth < 500 ? 0 : 50;
  }

  addItem() {
    this.data = [...this.data];
    console.log(this.data);
  }
  popItem() {
    this.data = [...this.data];
    console.log(this.data);
  }
}
