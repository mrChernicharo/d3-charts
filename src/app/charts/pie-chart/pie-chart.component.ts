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
  @Input() margins: number;
  colors = ['orange', 'coral', 'red', 'purple', 'magenta'];
  height = 300;

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
      // .style('border', '1px solid green')
      .style('transform', `translateX(${this.margins - 2}px)`); // margin - borders

    const g = d3
      .select('svg')
      .append('g')
      .style('transform', `translate(${this.availableWidth / 2}px, 200px)`);
  }

  update() {
    // resize chart's width
    const width = this.availableWidth - this.margins * 2;
    const radius = Math.min(this.availableWidth, this.height) * 0.3;
    const arrValues = Object.values(this.dataSource.ageGroups);

    // transition
    const trans = d3.transition().duration(600).ease(d3.easeCubicIn);

    d3.select('svg')
      .attr('width', width)
      .style('transform', `translateX(${this.margins - 2}px)`);

    const arcsGen = d3.arc().innerRadius(0).outerRadius(radius);

    const pieData = d3.pie<any>()(arrValues);
    console.log(pieData);

    //perform data join
    const selection = d3
      .select('g')
      .style('transform', `translate(${this.availableWidth / 2}px, 200px)`)
      .selectAll('path')
      .data(pieData);

    // Add new elements
    selection
      .enter()
      .append('path')
      .attr(
        'd',
        (d) => arcsGen(d as any) // se não tipar como any, dá um erro fudido!
      )
      .attr('fill', (_, i) => this.colors[i]);

    // Update existing AND new elements
    selection
      .transition(trans)
      .attr(
        'd',
        (d) => arcsGen(d as any) // se não tipar como any, dá um erro fudido!
      )
      .attr('fill', (_, i) => this.colors[i]);

    selection.exit().transition(trans).remove();

    const textSelection = d3.select('g').selectAll('text').data(pieData);

    textSelection
      .enter()
      .append('text')
      .attr('x', (d) => arcsGen.centroid(d as any)[0])
      .attr('y', (d) => arcsGen.centroid(d as any)[1])
      .attr('fill', 'black')
      .attr('font-size', 12)
      .attr('text-anchor', 'middle') // end, middle, start
      .attr('alignment-baseline', 'text-after-edge') // middle, hanging, central,  after-edge | text-after-edge
      .text((d) => Math.floor(this.dataSource.population / d.data));

    textSelection
      .transition(trans)
      .attr('x', (d) => arcsGen.centroid(d as any)[0] * 1.4)
      .attr('y', (d) => arcsGen.centroid(d as any)[1] * 1.4)
      .text((d) => Math.floor(this.dataSource.population / (d as any).data));

    textSelection.exit().transition().duration(100).attr('fill', 0).remove();
  }
}
