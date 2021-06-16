import { Component, Input, OnInit } from '@angular/core';
import { ICity } from 'src/app/utils/pieHelper';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() dataSource: ICity;
  @Input() availableWidth: number;

  constructor() {}

  ngOnInit(): void {}
}
