import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ICar } from 'src/app/app.component';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() dataSource: ICar[];
  @Input() availableWidth: number;
  margins = 50;

  constructor() {}

  ngOnInit(): void {
    this.drawChart();
    this.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    if (changes.dataSource || changes.availableWidth) {
      this.update();
    }
  }

  drawChart() {
    const chart = d3.select('div#bar-chart');

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

    // Perform the data join
    const selection = d3.select('g').selectAll('rect').data(this.dataSource);

    const barAttrs = {
      width: 20,
      fill: 'blue',
      transform: 'translateX(-10px)',
    };

    // Add new elements
    selection
      .enter()
      .append('rect')
      .attr('x', (d, i, arr) => (width / (arr.length + 1)) * (i + 1))
      .attr('width', 20)
      .style('transform', 'translateX(-10px)')
      .style('fill', 'blue')
      .transition(trans)
      .attr('y', 0)
      .attr('height', (d, i) => d.value / 1200);

    // Update existing AND new elements
    selection
      .transition(trans)
      .attr('x', (d, i, arr) => (width / (arr.length + 1)) * (i + 1))
      .attr('y', 0)
      .attr('width', 20)
      .attr('height', (d, i) => d.value / 1200)
      .style('transform', 'translateX(-10px)')
      .style('fill', 'blue');

    // Remove surplus elements
    selection.exit().transition(trans).attr('height', 0).remove();
  }
}
