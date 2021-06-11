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
  headerItems = ['description', 'value', 'year'];

  constructor() {}

  ngOnInit(): void {
    this.drawChart();
    this.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.dataSource) {
      this.update();
    }
  }

  drawChart() {
    const chart = d3.select('div#bar-chart');

    chart.append('svg').attr('width', '100%').attr('height', '100%');

    const g = d3.select('svg').append('g');
  }

  update() {
    const trans = d3.transition().duration(600);

    // Perform the data join
    const selection = d3.select('g').selectAll('circle').data(this.dataSource);

    // Add new elements
    selection
      .enter()
      .append('circle')
      .attr('cx', (d, i) => i * 20 + 20)
      .attr('cy', (d, i) => i * 20 + 20)
      .transition(trans)
      .attr('r', 7)
      .style('fill', 'blue');

    // Update existing AND new elements
    selection
      .attr('cx', (d, i) => i * 20 + 20)
      .attr('cy', (d, i) => i * 20 + 20)
      .attr('r', 7)
      .style('fill', 'blue');

    // Remove surplus elements
    selection.exit().transition(trans).attr('r', 0).remove();
  }
}
