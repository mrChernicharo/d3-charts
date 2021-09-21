import { Component, HostListener, OnInit } from '@angular/core';
import { datatype } from 'faker';
import { IMultiLineData, lineMinMax, multiLinesDataset } from 'src/app/utils/multiLineHelper';

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

  lines: IMultiLineData[][];
  linesNames: string[] = [];

  colors = ['purple', 'crimson', 'orange', 'royalblue'];

  constructor() {}

  ngOnInit(): void {
    this.data = multiLinesDataset;
    this.linesNames = Object.keys(this.data);

    this.lines = this.linesNames.map((line) => this.data[line]);

    console.log(this.data);
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
    this.chartMargins = this.windowWidth < 600 ? 0 : 50;
  }

  add() {
    this.lines.forEach((line, i) => {
      const lastDate = line[line.length - 1].timestamp;

      const newDataPoint = {
        timestamp: lastDate + 24 * 60 * 60 * 1000,
        value: datatype.number({
          min: lineMinMax[this.linesNames[i]].min,
          max: lineMinMax[this.linesNames[i]].max,
        }),
      };
      line.push(newDataPoint);

      this.data[this.linesNames[i]] = line;
    });

    // cloning obj to trigger mutation
    this.data = Object.assign({}, this.data);

    console.log(this.data);
  }

  remove() {
    const dataCopy = Object.assign({}, this.data);

    this.lines.forEach((line, i) => {
      const lineCopy = line.slice();
      lineCopy.splice(0, 1);

      dataCopy[this.linesNames[i]] = lineCopy;
    });

    this.data = dataCopy;
    this.lines = Object.keys(this.data).map((lineName) => dataCopy[lineName]);
    console.log(this.data);
  }
}
