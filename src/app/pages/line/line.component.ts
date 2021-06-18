import { Component, HostListener, OnInit } from '@angular/core';
import { cities, ICity } from 'src/app/utils/pieHelper';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnInit {
  title = 'Line';
  windowWidth: number;
  chartMargins: number;

  citiesData: ICity[];

  constructor() {}

  ngOnInit(): void {
    this.citiesData = cities;

    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
    this.chartMargins = this.windowWidth < 600 ? 0 : 50;
  }
}
