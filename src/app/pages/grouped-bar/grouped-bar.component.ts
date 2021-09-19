import { Component, HostListener, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { initialGroupedData } from 'src/app/utils/groupedBarsHelper';

@Component({
  selector: 'app-grouped-bar',
  templateUrl: './grouped-bar.component.html',
  styleUrls: ['./grouped-bar.component.scss'],
})
export class GroupedBarComponent implements OnInit {
  title = 'grouped bars';
  data = [];
  windowWidth = 0;
  chartMargins = 0;

  constructor() {}

  ngOnInit(): void {
    this.data = initialGroupedData;

    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.windowWidth = window.innerWidth;
    this.chartMargins = this.windowWidth < 500 ? 0 : 50;
  }

  addCar() {
    this.data = [...this.data];
    console.log(this.data);
  }
  popCar() {
    this.data = [...this.data];
    console.log(this.data);
  }
}
