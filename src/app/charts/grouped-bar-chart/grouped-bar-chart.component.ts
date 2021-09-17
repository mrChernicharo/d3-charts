import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouped-bar-chart',
  templateUrl: './grouped-bar-chart.component.html',
  styleUrls: ['./grouped-bar-chart.component.scss'],
})
export class GroupedBarChartComponent implements OnInit {
  @Input() dataSource;
  @Input() availableWidth;

  constructor() {}

  ngOnInit(): void {}
}
