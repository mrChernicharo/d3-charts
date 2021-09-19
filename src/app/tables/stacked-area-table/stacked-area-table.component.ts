import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-area-table',
  templateUrl: './stacked-area-table.component.html',
  styleUrls: ['./stacked-area-table.component.scss'],
})
export class StackedAreaTableComponent implements OnInit {
  @Input() dataSource;

  constructor() {}

  ngOnInit(): void {}
}
