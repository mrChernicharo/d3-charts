import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
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
    d3.select('#stacked-area')
      .append('svg')
      .attr('class', 'svg')
      .attr('height', this.height)
      .attr('width', `${this.availableWidth - this.outerMargins}`)
      .style('transform', `translateX(${this.outerMargins / 2}px)`)
      .style('border', '1px solid forestgreen');

    d3.select('.svg').append('g').attr('class', 'x-axis');
    d3.select('.svg').append('g').attr('class', 'y-axis');

    d3.select('.svg')
      .append('g')
      .attr('class', 'area-g')
      .attr('width', this.availableWidth)
      .attr('height', this.height);
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
      .keys(['pizzas', 'shakes', 'burgers', 'salads'])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const amountSeries = stackGen([...this.dataSource] as any[]);
    const timeSeries = this.dataSource.map((d) => d.time.getTime());

    //********************************************************//

    const xScale = d3
      .scaleLinear()
      .domain([this.dataSource[0].time.getTime(), this.dataSource[dataLen - 1].time.getTime()])
      .range([this.margins.left, this.availableWidth - this.margins.right - this.outerMargins]);

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
      .curve(d3.curveNatural)
      .curve(d3.curveStep)
      .x((d, i) => xScale(timeSeries[i]))
      .y1((d, i) => yScale(d[1]))
      .y0((d, i) => yScale(d[0]));

    const areaPaths = d3.select('.area-g').selectAll('path').data(amountSeries);

    areaPaths
      .enter()
      .append('path')
      .attr('stroke', '#fff')
      .attr('fill', (d, i) => colors[i])
      .attr('d', (d, i) => areaGen(d as any))
      .attr('opacity', (d, i) => 1 - i * 0.1);

    areaPaths.attr('d', (d, i) => areaGen(d as any));
  }
}
