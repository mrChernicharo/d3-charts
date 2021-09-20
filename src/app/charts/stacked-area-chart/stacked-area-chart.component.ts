import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
import { timer } from 'rxjs';
import { IStackedAreaItem } from 'src/app/utils/stackedAreasHelper';

type IDatum = { [key: string]: number };
type ISeries = d3.Series<IDatum, string>[];

@Component({
  selector: 'app-stacked-area-chart',
  templateUrl: './stacked-area-chart.component.html',
  styleUrls: ['./stacked-area-chart.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class StackedAreaChartComponent implements OnInit, OnChanges {
  @Input() dataSource: IStackedAreaItem[];
  @Input() availableWidth: number;
  @Input() outerMargins: number;
  height = 400;

  margins = { top: 20, bottom: 32, left: 60, right: 48 };

  tooltip;

  constructor() {}

  ngOnInit(): void {
    this.drawChart();
    timer(100).subscribe(() => this.updateChart());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.dataSource || changes.availableWidth) {
      this.updateChart();
      timer(0).subscribe(() => this.updateChart());
    }
  }

  drawChart() {
    d3.select('#stacked-area')
      .append('svg')
      .attr('class', 'svg')
      .attr('height', this.height)
      .attr('width', `${this.availableWidth - this.outerMargins}`)
      .style('transform', `translateX(${this.outerMargins / 2}px)`)
      .style('border', '1px solid forestgreen');

    d3.select('.svg').append('g').attr('class', 'x-axis');
    d3.select('.svg').append('g').attr('class', 'y-axis');

    d3.select('.svg').append('g').attr('class', 'area-g');
    d3.select('.svg').append('g').attr('class', 'dots-g');

    this.tooltip = d3
      .select('#stacked-area')
      .append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('opacity', 0)
      .style('background', '#454545')
      .style('color', '#fff')
      .style('font-size', '12px')
      .style('height', '24px')
      // .style('width', '160px')
      .style('padding', '10px')
      .style('display', 'flex')
      .style('align-items', 'center')
      .style('pointer-events', 'none')
      .style('justify-content', 'center');

    this.updateChart();
  }

  updateChart() {
    const tickSize = 90;
    const topYOffset = 5;
    const dataLen = this.dataSource.length;

    const dateFormat = d3.timeFormat('%b/%d'); // abbr.month/day
    const minV = (series: ISeries) => d3.min(series, (d) => d3.min(d, (d) => d3.min(d)));
    const maxV = (series: ISeries) => d3.max(series, (d) => d3.max(d, (d) => d3.max(d)));

    const svg = d3.select('.svg');

    svg
      .attr('width', `${this.availableWidth - this.outerMargins}`)
      .style('transform', `translateX(${this.outerMargins / 2}px)`);

    const stackGen = d3
      .stack()
      .keys(['pizzas', 'burgers', 'salads', 'shakes'])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);
    // .order(d3.stackOrderAppearance)

    const amountSeries = stackGen([...this.dataSource] as any[]);
    const timeSeries = this.dataSource.map((d) => d.time.getTime());

    //********************************************************//

    const xScale = d3
      .scaleLinear()
      .domain([timeSeries[0], timeSeries[dataLen - 1]])
      .range([this.margins.left, this.availableWidth - this.margins.right - this.outerMargins]);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(this.availableWidth / tickSize)
      .tickFormat(dateFormat)
      .tickSizeOuter(0)
      .tickPadding(3);

    d3.select('.x-axis')
      .call(xAxis)
      .attr('transform', `translate(0,${this.height - this.margins.bottom})`);

    const yScale = d3
      .scaleLinear()
      .domain([maxV(amountSeries) + topYOffset, 0])
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

    // *************************************************//

    const colors = d3.schemeSpectral[amountSeries.length];

    const areaGen = d3
      .area()
      // .curve(d3.curveNatural)
      // .curve(d3.curveStep)
      .curve(d3.curveCardinal.tension(0.1))
      .x((d, i) => xScale(timeSeries[i]))
      .y1((d, i) => yScale(d[1]))
      .y0((d, i) => yScale(d[0]));

    const areaPaths = d3.select('.area-g').selectAll('path').data(amountSeries);

    areaPaths
      .enter()
      .append('path')
      .attr('class', (d, i) => `area-${i}-${d.key}`)
      .attr('d', (d, i) => areaGen(d as any))
      .attr('stroke', '#fff')
      .attr('fill', (d, i) => colors[i])
      .attr('opacity', (d, i) => 1 - (i + 1) * 0.1);

    areaPaths.transition().attr('d', (d, i) => areaGen(d as any));

    const concated: [number, number][] = [].concat(...amountSeries);

    const dotsData = ['pizzas', 'burgers', 'salads', 'shakes'].map((k, i) => ({
      [k]: this.dataSource.map((item) => ({ product: k, amount: item[k], time: item.time })),
    }));

    const concatedDotsData = [].concat(
      ...dotsData.map((prodArr) => [].concat(...Object.values(prodArr)))
    );

    const dots = d3.select('.dots-g').selectAll('circle').data(concated);

    dots
      .enter()
      .append('circle')
      .attr('class', (d, i) => `dot-${i}`)
      .attr('data-dot-item', (d, i) => JSON.stringify(concatedDotsData[i]))
      .attr('cx', (d, i) => xScale(timeSeries[i % timeSeries.length]))
      .attr('cy', (d, i) => yScale(d[1]))
      .attr('r', 0)
      .transition()
      .duration(600)
      .attr('fill', (d, i) => colors[Math.floor(i / timeSeries.length)])
      .attr('r', 3);

    dots
      .attr('cy', (d, i) => yScale(d[1]))
      .attr('cx', (d, i) => xScale(timeSeries[i % timeSeries.length]))
      .attr('r', 0)
      .transition()
      .duration(600)
      .attr('data-dot-item', (d, i) => JSON.stringify(concatedDotsData[i]))
      .attr('fill', (d, i) => colors[Math.floor(i / timeSeries.length)])
      .attr('stroke', '#fff')
      .attr('r', 3);

    dots.exit().attr('r', 0).transition().duration(600).remove();

    //*************************** */

    console.log({
      dataSource: this.dataSource,
      concated,
      amountSeries,
      dotNodes: dots.nodes(),
      dotsData,
      concatedDotsData,
    });

    dots.on('mousemove', (e: MouseEvent, d) => {
      const dotData = e.target['dataset'];

      const tooltipData = JSON.parse(dotData.dotItem);

      const { product, amount, time } = tooltipData;

      const splitDate = time.split('-');
      const day = (splitDate[2] as string).match(/[0-9]+/)[0];
      const date = new Date(splitDate[0], splitDate[1] - 1, +day);

      const [x, y] = [e.x, e.y];

      this.tooltip
        .transition()
        .style('opacity', 1)
        .style('top', `${e.y - 50}px`)
        .style('left', `${e.x > this.availableWidth / 2 ? e.x - 100 + 'px' : 'unset'}`)
        .style(
          'right',
          `${e.x < this.availableWidth / 2 ? this.availableWidth - 100 - e.x + 'px' : 'unset'}`
        )
        .text(`${dateFormat(date)}: ${amount} ${product}`);
    });
    dots.on('mouseout', (e) => {
      console.log('out');
      this.tooltip.transition().style('opacity', 0);
    });
  }
}
