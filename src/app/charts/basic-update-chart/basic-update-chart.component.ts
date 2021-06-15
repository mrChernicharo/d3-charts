import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { select, transition } from 'd3';
import { ICar } from '../../utils/barHelper';

@Component({
  selector: 'app-basic-update-chart',
  templateUrl: './basic-update-chart.component.html',
  styleUrls: ['./basic-update-chart.component.scss'],
})
export class BasicUpdateChartComponent implements OnInit {
  @Input() dataSource: ICar[];
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
    const chart = select('#basic-update-canvas');

    chart.append('svg').attr('width', '100%').attr('height', '100%');

    const g = select('svg').append('g');
  }

  update() {
    const trans = transition().duration(600);

    // Perform the data join
    const selection = select('g').selectAll('circle').data(this.dataSource);

    // Add new elements
    selection
      .enter()
      .append('circle')
      .attr('cy', 200)
      .attr('cx', (d, i) => i * 20 + 20)
      .transition(trans)
      .attr('r', 7)
      .style('fill', 'blue');

    // Update existing AND new elements
    selection
      .attr('cx', (d, i) => i * 20 + 20)
      .attr('cy', 200)
      .attr('r', 7)
      .style('fill', 'blue');

    // Remove surplus elements
    selection.exit().transition(trans).attr('r', 0).remove();
  }
}
