import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { IGroupedBarItem } from 'src/app/utils/groupedBarsHelper';

@Component({
  selector: 'app-grouped-bar-chart',
  templateUrl: './grouped-bar-chart.component.html',
  styleUrls: ['./grouped-bar-chart.component.scss'],
})
export class GroupedBarChartComponent implements OnInit, OnChanges {
  @Input() dataSource: IGroupedBarItem[];
  @Input() availableWidth: number;
  @Input() outterMargins: number;

  constructor() {}

  ngOnInit(): void {
    this.drawChart();
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.dataSource || changes.availableWidth) {
      this.updateChart();
    }
  }

  drawChart() {
    d3.select('#grouped-bar').append('svg').attr('class', 'svg').attr('width');
  }
  updateChart() {}
}
