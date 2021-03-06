import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ILineData } from 'src/app/utils/lineHelper';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  providers: [CurrencyPipe],
})
export class LineChartComponent implements OnInit {
  @Input() data: ILineData[];
  @Input() availableWidth: number;
  @Input() outerMargins: number;
  height = 300;
  colors = ['orange', 'orangered', 'red', 'crimson'];

  margins = { top: 20, bottom: 32, left: 60, right: 48 };

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    this.drawChart();
    this.update();
    console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.data || changes.availableWidth) {
      this.update();
    }
  }

  drawChart() {
    d3.select('.line-chart')
      .append('svg')
      .attr('height', this.height)
      .attr('width', `${this.availableWidth - this.outerMargins}`)
      .style('transform', `translateX(${this.outerMargins / 2}px)`);

    d3.select('svg').append('g').attr('class', 'x-axis');
    d3.select('svg').append('g').attr('class', 'y-axis');

    d3.select('svg').append('g').attr('class', 'line-g').append('path').attr('class', 'line-path');
    d3.select('svg').append('g').attr('class', 'dots-g');
  }
  update() {
    d3.select('svg')
      .attr('width', `${this.availableWidth - this.outerMargins}`)
      .style('transform', `translateX(${this.outerMargins / 2}px)`);

    const xScale = d3
      .scaleLinear()
      .domain([this.data[0].timestamp, this.data[this.data.length - 1].timestamp])
      .range([this.margins.left, this.availableWidth - this.margins.right - this.outerMargins]);

    const dateFormat = d3.timeFormat('%b/%d'); // abbr.month/day
    const tickSize = 90;

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(this.availableWidth / tickSize)
      .tickFormat(dateFormat)
      .tickSizeOuter(0);

    d3.select('.x-axis')
      .call(xAxis)
      .attr('transform', `translate(0,${this.height - this.margins.bottom})`);

    const yScale = d3
      .scaleLinear()
      .domain([
        Math.max(...this.data.map((v) => v.value)) * 1.2,
        // Math.min(...this.data.map((v) => v.value)) * 0.1,
        0,
      ])
      .range([this.margins.top, this.height - this.margins.bottom]);

    const yAxis = d3
      .axisLeft(yScale)
      .tickSizeOuter(0)
      .tickSizeInner(
        this.margins.right + this.margins.left + this.outerMargins - this.availableWidth
      );

    d3.select('.y-axis')
      .call(yAxis)
      .attr('transform', `translate(${this.margins.left}, 0)`)
      .selectAll('line')
      .attr('opacity', 0.3);

    const lineGen = d3
      .line()
      .x((d, i) => xScale(this.data[i].timestamp))
      .y((d, i) => yScale(this.data[i].value))
      .curve(d3.curveCardinal.tension(0.7));

    d3.select('.line-path')
      .transition()
      .attr('d', lineGen(this.data as any))
      .attr('stroke', this.colors[0])
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    const dots = d3.select('.dots-g').selectAll('circle').data(this.data);

    dots
      .enter()
      .append('circle')
      .attr('class', (_, i) => `dot dot-${i}`)
      .attr('stroke', this.colors[1])
      .attr('fill', '#fff')
      .attr('stroke-width', 2)
      .attr('cx', (d) => xScale(d.timestamp))
      .attr('cy', (d) => yScale(d.value))
      .attr('r', 3)
      .style('cursor', 'pointer');

    dots
      .attr('r', 1)
      .transition()
      .attr('cy', (d) => yScale(d.value))
      .attr('cx', (d) => xScale(d.timestamp))
      .attr('r', 3);

    dots.exit().remove();

    const tooltip = d3
      .select('.line-chart')
      .append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('opacity', 0)
      .style('background', '#454545')
      .style('color', '#fff')
      .style('font-size', '12px')
      .style('height', '32px')
      .style('width', '84px')
      .style('display', 'flex')
      .style('align-items', 'center')
      .style('pointer-events', 'none')
      .style('justify-content', 'center');

    d3.selectAll('.dot')
      .on('mousemove', (e: MouseEvent, d: ILineData) => {
        const [x, y] = [e.x, e.y];

        tooltip
          .transition()
          .style('opacity', 1)
          .style('top', `${e.y - 50}px`)
          .style('left', `${e.x > this.availableWidth / 2 ? e.x - 100 + 'px' : 'unset'}`)
          .style(
            'right',
            `${e.x < this.availableWidth / 2 ? this.availableWidth - 100 - e.x + 'px' : 'unset'}`
          )
          .text(this.currencyPipe.transform(d.value));
      })
      .on('mouseout', () => {
        tooltip.transition().style('opacity', 0);
      });
  }
}
