import { Component, HostListener, OnInit } from '@angular/core';
import { ILineData, lineValues } from '../../utils/lineHelper';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnInit {
  title = 'Line';
  windowWidth: number;
  chartMargins: number;

  data: ILineData[] = [];

  constructor() {}

  ngOnInit(): void {
    this.data = lineValues;

    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
    this.chartMargins = this.windowWidth < 600 ? 0 : 50;
  }
}
