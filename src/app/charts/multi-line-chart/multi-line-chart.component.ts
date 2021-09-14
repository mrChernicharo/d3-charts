import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { IMultiLineData, IMultiLineDataset } from 'src/app/utils/multiLineHelper';

@Component({
  selector: 'app-multi-line-chart',
  templateUrl: './multi-line-chart.component.html',
  styleUrls: ['./multi-line-chart.component.scss'],
})
export class MultiLineChartComponent implements OnInit {
  @Input() data: IMultiLineDataset;
  @Input() availableWidth: number;
  @Input() outerMargins: number;
  height = 400;
  // colors = ['orange', 'orangered', 'red', 'crimson'];
  colors = ['orange', 'blue', 'red', 'green'];

  margins = { top: 20, bottom: 32, left: 60, right: 48 };
  constructor() {}

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
    d3.select('.mulit-line-chart')
      .append('svg')
      .attr('height', this.height)
      .attr('width', `${this.availableWidth - this.outerMargins}`)
      .style('transform', `translateX(${this.outerMargins / 2}px)`)
      .style('border', '1px solid red');

    d3.select('svg').append('g').attr('class', 'x-axis');
    d3.select('svg').append('g').attr('class', 'y-axis');

    Object.keys(this.data).forEach((lineItem) => {
      d3.select('svg')
        .append('g')
        .attr('class', `${lineItem}-g`)
        .append('path')
        .attr('class', `${lineItem}-path`);

      d3.select('svg').append('g').attr('class', `${lineItem}-dots-g`);
    });
  }
  update() {
    d3.select('svg')
      .attr('width', `${this.availableWidth - this.outerMargins}`)
      .style('transform', `translateX(${this.outerMargins / 2}px)`);

    const xScale = d3
      .scaleLinear()
      .domain([this.data.line1[0].timestamp, this.data.line1[this.data.line1.length - 1].timestamp])
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
      .domain([getMaxValue(this.data), 0])
      .range([this.margins.bottom, this.height - this.margins.top]);

    const yAxis = d3
      .axisLeft(yScale)
      .tickSizeOuter(0)
      .tickSizeInner(
        this.margins.right + this.margins.left + this.outerMargins - this.availableWidth
      );

    d3.select('.y-axis')
      .call(yAxis)
      .attr('transform', `translate(${this.margins.left}, -12)`)
      .selectAll('line')
      .attr('opacity', 0.3);

    // *************************

    Object.keys(this.data).forEach((lineItem, index) => {
      const lineGen = d3
        .line()
        .x((d, i) => xScale((this.data[lineItem] as IMultiLineData)[i].timestamp))
        .y((d, i) => yScale((this.data[lineItem] as IMultiLineData)[i].value))
        .curve(d3.curveCardinal.tension(0.7));

      d3.select(`.${lineItem}-path`)
        .attr('d', lineGen(this.data[lineItem] as any))
        .attr('stroke', this.colors[index])
        .attr('stroke-width', 2)
        .attr('fill', 'none');

      const dots = d3
        .select(`.${lineItem}-dots-g`)
        .selectAll('circle')
        .data(this.data[lineItem] as IMultiLineData[]);

      dots
        .enter()
        .append('circle')
        .attr('class', (_, i) => `dot dot-${i}`)
        .attr('stroke', this.colors[index])
        .attr('fill', '#fff')
        .attr('stroke-width', 2)
        .attr('cx', (d) => xScale(d.timestamp))
        .attr('cy', (d) => yScale(d.value))
        .attr('r', 3)
        .style('cursor', 'pointer');

      dots
        .attr('r', 1)
        .attr('cy', (d) => yScale(d.value))
        .attr('cx', (d) => xScale(d.timestamp))
        .attr('r', 3);

      dots.exit().remove();
    });

    // const tooltip = d3
    //   .select('.multi-line-chart')
    //   .append('div')
    //   .attr('class', 'tooltip')
    //   .style('position', 'absolute')
    //   .style('opacity', 0)
    //   .style('background', '#454545')
    //   .style('color', '#fff')
    //   .style('font-size', '12px')
    //   .style('height', '32px')
    //   .style('width', '84px')
    //   .style('display', 'flex')
    //   .style('align-items', 'center')
    //   .style('pointer-events', 'none')
    //   .style('justify-content', 'center');

    // d3.selectAll('.dot')
    //   .on('mousemove', (e: MouseEvent, d: IMultiLineData) => {
    //     const currFormater = d3.format('($.2f');
    //     console.log({ e, d });
    //     tooltip
    //       .transition()
    //       .style('opacity', 1)
    //       .style('top', `${e.y - 50}px`)
    //       .style('left', `${e.x - 100}px`)
    //       .text(currFormater(d.value));
    //   })
    //   .on('mouseout', () => {
    //     tooltip.style('opacity', 0);
    //   });
  }
}

function getMaxValue(data: IMultiLineDataset) {
  const lines = Object.keys(data);
  const maxVals = [];

  lines.forEach((line) => {
    const lineMax = (data[line] as IMultiLineData[]).reduce((acc, curr) => {
      if (curr.value > acc) acc = curr.value;
      return acc;
    }, 0);

    maxVals.push(lineMax);
  });

  const maxVal = maxVals.reduce((acc, curr) => {
    if (curr > acc) acc = curr;
    return acc;
  }, 0);

  console.log(maxVal);
  return maxVal;
}
function getMinValue(data: IMultiLineDataset) {
  const lines = Object.keys(data);
  const minVals = [];

  lines.forEach((line) => {
    const lineMin = (data[line] as IMultiLineData[]).reduce((acc, curr, i) => {
      if (i === 0) acc = curr.value;
      if (curr.value < acc) acc = curr.value;
      return acc;
    }, 0);

    minVals.push(lineMin);
  });

  const minVal = minVals.reduce((acc, curr, i) => {
    if (i === 0) acc = curr;
    if (curr < acc) acc = curr;
    return acc;
  }, 0);

  console.log(minVal);
  return minVal;
}
