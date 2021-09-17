import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouped-bar-table',
  templateUrl: './grouped-bar-table.component.html',
  styleUrls: ['./grouped-bar-table.component.scss'],
})
export class GroupedBarTableComponent implements OnInit {
  @Input() dataSource;

  constructor() {}

  ngOnInit(): void {}
}
