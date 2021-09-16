import { Component, HostListener, OnInit } from '@angular/core';
import { datatype } from 'faker';
import {
  IMultiLineData,
  IMultiLineDataset,
  multiLinesDataset,
} from 'src/app/utils/multiLineHelper';

@Component({
  selector: 'app-multi-line',
  templateUrl: './multi-line.component.html',
  styleUrls: ['./multi-line.component.scss'],
})
export class MultiLineComponent implements OnInit {
  title = 'MultiLine';
  windowWidth: number;
  chartMargins: number;

  data = multiLinesDataset;

  constructor() {}

  ngOnInit(): void {
    this.data = multiLinesDataset;

    console.log(this.data);
    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
    this.chartMargins = this.windowWidth < 600 ? 0 : 50;
  }

  add() {
    // const lastDate = this.data[this.data.length - 1].timestamp;
    // const newDataPoint = {
    //   timestamp: lastDate + 24 * 60 * 60 * 1000,
    //   value: datatype.number({ min: 50_000, max: 400_000 }),
    // };

    // this.data = [...this.data, newDataPoint];
    console.log(this.data);
  }

  remove() {
    // const copy = this.data.slice();
    // copy.splice(0, 1);

    // this.data = copy;
    console.log(this.data);
  }
}
