import { Component, Input, OnInit } from '@angular/core';
import { IBarData } from 'src/app/app.component';

@Component({
  selector: 'app-bar-table',
  templateUrl: './bar-table.component.html',
  styleUrls: ['./bar-table.component.scss'],
})
export class BarTableComponent implements OnInit {
  @Input() dataSource: IBarData[];

  constructor() {}

  ngOnInit(): void {}
}
