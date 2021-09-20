import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICar } from '../../utils/barHelper';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() dataSource: ICar[];
  @Input() availableWidth: number;

  height = 400;
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
      .attr('height', this.height)
      .style('border', '1px solid green')
      .style('transform', 'translateX(48px) rotateX(180deg)'); // margin - borders

    const g = d3.select('svg').append('g');
    const axisG = d3.select('svg').append('g').attr('class', 'axis-g');
  }

  update() {
    // resize chart's width
    const width = this.availableWidth - this.margins * 2;
    d3.select('svg').attr('width', width);

    // transition
    const trans = d3.transition().duration(600);

    // Perform the data join
    const selection = d3.select('g').selectAll('rect').data(this.dataSource);

    // Add new elements
    selection
      .enter()
      .append('rect')
      .attr('x', (d, i, arr) => (width / (arr.length + 1)) * (i + 1))
      .attr('width', 20)
      .style('transform', 'translateX(-10px)')
      .style('fill', 'forestgreen')
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
      .style('fill', 'forestgreen');

    // Remove surplus elements
    selection.exit().transition(trans).attr('height', 0).remove();

    const maxV = d3.max(this.dataSource.map((d) => d.value));

    const scaleY = d3.scaleLinear().domain([maxV, 0]).range([0, this.height]);
    const axisY = d3.axisLeft(scaleY);
    d3.select('.axis-g').call(axisY);
    // .attr('transform', 'rotate(180) translate(100,0)');
  }
}
