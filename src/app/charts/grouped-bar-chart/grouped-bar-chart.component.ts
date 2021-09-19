import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
import { IGroupedBarItem } from 'src/app/utils/groupedBarsHelper';

type IDatum = { [key: string]: number };
type ISeries = d3.Series<IDatum, string>[];

@Component({
  selector: 'app-grouped-bar-chart',
  templateUrl: './grouped-bar-chart.component.html',
  styleUrls: ['./grouped-bar-chart.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class GroupedBarChartComponent implements OnInit, OnChanges {
  @Input() dataSource: IGroupedBarItem[];
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
    d3.select('#grouped-bar')
      .append('svg')
      .attr('class', 'svg')
      .attr('height', this.height)
      .attr('width', `${this.availableWidth - this.outerMargins}`)
      .style('transform', `translateX(${this.outerMargins / 2}px)`)
      .style('border', '1px solid forestgreen');

    d3.select('.svg').append('g').attr('class', 'x-axis');
    d3.select('.svg').append('g').attr('class', 'y-axis');
  }
  updateChart() {
    const tickSize = 90;
    const topYOffset = 5;
    const dateFormat = d3.timeFormat('%b/%d'); // abbr.month/day
    const dataLen = this.dataSource.length;

    d3.select('.svg')
      .attr('width', `${this.availableWidth - this.outerMargins}`)
      .style('transform', `translateX(${this.outerMargins / 2}px)`);

    const stackGen = d3
      .stack()
      .keys(['pizzas', 'shakes', 'burgers', 'salads'])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const amountSeries = stackGen([...this.dataSource] as any[]);

    console.log(amountSeries);

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
      .domain([getMax(amountSeries) + topYOffset, 0])
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
  }
}

function getMax(series: ISeries) {
  const len = series.length;

  return Math.max(...series[len - 1].map((item) => item['1']));
}
