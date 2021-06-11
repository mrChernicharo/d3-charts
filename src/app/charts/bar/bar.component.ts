import { Component, Input, OnInit } from '@angular/core';
import { IBarData } from 'src/app/app.component';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  @Input() dataSource: IBarData[];
  headerItems = ['description', 'value', 'amount'];

  constructor() {}

  ngOnInit(): void {}
}
