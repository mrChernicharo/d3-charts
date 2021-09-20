import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-bars-chart',
  templateUrl: './stacked-bars-chart.component.html',
  styleUrls: ['./stacked-bars-chart.component.scss'],
})
export class StackedBarsChartComponent implements OnInit {
  @Input() dataSource;
  @Input() availableWidth;
  @Input() outerMargins;

  constructor() {}

  ngOnInit(): void {}
}
