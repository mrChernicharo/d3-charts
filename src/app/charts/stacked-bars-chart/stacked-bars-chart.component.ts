import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { ISeries } from 'src/app/utils/stackedBarsHelper';

@Component({
  selector: 'app-stacked-bars-chart',
  templateUrl: './stacked-bars-chart.component.html',
  styleUrls: ['./stacked-bars-chart.component.scss'],
})
export class StackedBarsChartComponent implements OnInit, OnChanges {
  @Input() dataSource;
  @Input() availableWidth;
  @Input() outerMargins;

  height = 300;

  margins = { top: 20, bottom: 32, left: 60, right: 48 };

  tooltip;

  constructor() {}

  ngOnInit(): void {
    this.drawChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataSource || changes.availableWidth) {
      console.log(changes);
      this.update();
    }
  }

  drawChart() {
    d3.select('#stacked-bars')
      .append('svg')
      .attr('height', this.height)
      .attr('width', `${this.availableWidth - this.outerMargins}`)
      .style('transform', `translateX(${this.outerMargins / 2}px)`);
    // .style('border', '1px solid');

    d3.select('svg').append('g').attr('class', 'x-axis-g');
    d3.select('svg').append('g').attr('class', 'y-axis-g');

    d3.select('svg').append('g').attr('class', 'bars-g');

    this.update();
  }
  update() {
    const tickSize = 90;
    const topYOffset = 5;
    const dataLen = this.dataSource.length;
    const dayDuration = 24 * 3600 * 1000;
    const maxV = (series: ISeries) => d3.max(series, (d) => d3.max(d, (d) => d3.max(d)));
    const dateFormat = d3.timeFormat('%b/%d'); // abbr.month/day

    const svg = d3
      .select('svg')
      .attr('width', `${this.availableWidth - this.outerMargins}`)
      .style('transform', `translateX(${this.outerMargins / 2}px)`);

    const stackGen = d3
      .stack()
      .keys(['pizzas', 'burgers', 'beers', 'salads', 'shakes'])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);
    // .order(d3.stackOrderAppearance)

    const amountSeries = stackGen([...this.dataSource] as any[]);
    const timeSeries = this.dataSource.map((d) => d.time.getTime());
    const barWidth =
      (this.availableWidth - this.margins.left - this.margins.right) / timeSeries.length / 1.4;

    const scaleX = d3
      .scaleTime()
      .domain([timeSeries[0] - dayDuration, timeSeries[dataLen - 1] + dayDuration])
      .range([this.margins.left, this.availableWidth - this.margins.right - this.outerMargins]);

    const xAxis = d3
      .axisBottom(scaleX)
      .ticks(this.availableWidth / tickSize)
      .tickFormat(dateFormat)
      .tickSizeOuter(0)
      .tickPadding(3);

    d3.select('.x-axis-g')
      .call(xAxis)
      .attr('transform', `translate(0, ${this.height - this.margins.bottom})`);

    const scaleY = d3
      .scaleLinear()
      .domain([maxV(amountSeries) + topYOffset, 0])
      .range([this.margins.top, this.height - this.margins.bottom]);

    const yAxis = d3
      .axisLeft(scaleY)
      .tickSizeOuter(0)
      .tickSizeInner(
        this.margins.right + this.margins.left + this.outerMargins - this.availableWidth
      );

    d3.select('.y-axis-g')
      .call(yAxis)
      .attr('transform', `translate(${this.margins.left}, 0)`)
      .selectAll('line')
      .attr('opacity', 0.3);

    const colors = d3.schemeSpectral[amountSeries.length];

    const barsG = d3
      .select('.bars-g')
      .selectAll('g')
      .data(amountSeries)
      .join('g')
      .attr('fill', (d, i) => colors[i])
      .selectAll('rect')
      .data((d) => d)
      .join(
        (enter) => enter.append('rect'),
        (update) => update,
        (exit) => exit.remove()
      )
      .attr('x', (d, i) => scaleX(d.data.time) - barWidth / 2)
      .attr('y', (d, i) => scaleY(d[1]))
      .attr('height', (d, i) => scaleY(d[0]) - scaleY(d[1]))
      .transition()
      .attr('width', (d, i) => barWidth);
  }
}
