import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IBarData } from 'src/app/app.component';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit, OnChanges {
  @Input() dataSource: IBarData[];
  headerItems = ['description', 'value', 'amount'];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.dataSource) {
      this.drawChart();
    }
  }

  drawChart() {
    const chart = d3.select('div#bar-chart');

    chart.append('svg').attr('width', '100%').attr('height', '100%');

    d3.select('svg')
      .selectAll('circle')
      .data(this.dataSource)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => i * 20)
      .attr('cy', (d, i) => i * 20)
      .attr('r', 6)
      .attr('fill', 'blue');
  }
}
