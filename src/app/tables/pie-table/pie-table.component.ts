import { Component, Input, OnInit } from '@angular/core';
import { ICity } from 'src/app/utils/pieHelper';

@Component({
  selector: 'app-pie-table',
  templateUrl: './pie-table.component.html',
  styleUrls: ['./pie-table.component.scss'],
})
export class PieTableComponent implements OnInit {
  @Input() dataSource: ICity[];

  constructor() {}

  ngOnInit(): void {}
}
