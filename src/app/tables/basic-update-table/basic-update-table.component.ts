import { Component, Input, OnInit } from '@angular/core';
import { ICar } from 'src/app/app.component';

@Component({
  selector: 'app-basic-update-table',
  templateUrl: './basic-update-table.component.html',
  styleUrls: ['./basic-update-table.component.scss'],
})
export class BasicUpdateTableComponent implements OnInit {
  @Input() dataSource: ICar[];

  constructor() {}

  ngOnInit(): void {}
}
