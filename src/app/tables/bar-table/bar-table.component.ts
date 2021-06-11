import { Component, Input, OnInit } from '@angular/core';
import { ICar } from 'src/app/app.component';

@Component({
  selector: 'app-bar-chart-table',
  templateUrl: './bar-table.component.html',
  styleUrls: ['./bar-table.component.scss'],
})
export class BarTableComponent implements OnInit {
  @Input() dataSource: ICar[];

  constructor() {}

  ngOnInit(): void {}
}
