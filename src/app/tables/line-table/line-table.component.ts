import { Component, Input, OnInit } from '@angular/core';
import { ICity } from 'src/app/utils/pieHelper';

@Component({
  selector: 'app-line-table',
  templateUrl: './line-table.component.html',
  styleUrls: ['./line-table.component.scss'],
})
export class LineTableComponent implements OnInit {
  @Input() dataSource: ICity[];

  constructor() {}

  ngOnInit(): void {}
}
