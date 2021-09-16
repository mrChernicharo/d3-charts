import { Component, Input, OnInit } from '@angular/core';
import { IMultiLineData, IMultiLineDataset } from 'src/app/utils/multiLineHelper';

@Component({
  selector: 'app-multi-line-table',
  templateUrl: './multi-line-table.component.html',
  styleUrls: ['./multi-line-table.component.scss'],
})
export class MultiLineTableComponent implements OnInit {
  @Input() dataSource: IMultiLineDataset;

  lines: IMultiLineData[][];
  linesNames: string[] = [];

  colors = ['royalblue', 'dodgerblue', 'lightblue'];

  constructor() {}

  ngOnInit(): void {
    this.linesNames = Object.keys(this.dataSource);

    this.lines = this.linesNames.map((line) => this.dataSource[line]);

    console.log(this.lines);
  }
}
