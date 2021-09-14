import { Component, HostListener, OnInit } from '@angular/core';
import { ILineData, lineValues } from '../../utils/lineHelper';
import { datatype } from 'faker';

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

  add() {
    const lastDate = this.data[this.data.length - 1].timestamp;
    const newDataPoint = {
      timestamp: lastDate + 24 * 60 * 60 * 1000,
      value: datatype.number({ min: 50_000, max: 400_000 }),
    };

    this.data = [...this.data, newDataPoint];
  }

  remove() {
    const copy = this.data.slice();
    copy.splice(0, 1);

    this.data = copy;
  }
}
