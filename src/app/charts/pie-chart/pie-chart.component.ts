import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { ICity } from 'src/app/utils/pieHelper';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() dataSource: ICity;
  @Input() availableWidth: number;
  margins = 50;

  constructor() {}

  ngOnInit(): void {
    this.drawChart();
    this.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.dataSource || changes.availableWidth) {
      this.update();
    }
  }
  drawChart() {
    const chart = d3.select('div#pie-chart');

    chart
      .append('svg')
      .attr('width', this.availableWidth - this.margins * 2)
      .attr('height', '100%')
      .style('border', '1px solid green')
      .style('transform', 'translateX(48px) rotateX(180deg)'); // margin - borders

    const g = d3.select('svg').append('g');
  }

  update() {
    // resize chart's width
    const width = this.availableWidth - this.margins * 2;
    d3.select('svg').attr('width', width);

    // transition
    const trans = d3.transition().duration(600);
  }
}
