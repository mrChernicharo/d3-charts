import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ICar } from '../../utils/barHelper';
import * as d3 from 'd3';
import { createItem, initialCars } from 'src/app/utils/barHelper';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  title = 'Bar';
  carsData: ICar[];
  windowWidth: number;
  chartMargins: number;

  constructor() {}

  ngOnInit() {
    this.carsData = initialCars;
    this.windowWidth = window.innerWidth;
  }

  addCar() {
    this.carsData = [...this.carsData, createItem()];
  }

  popCar() {
    this.carsData = [...this.carsData.slice(0, this.carsData.length - 1)];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    this.chartMargins = this.windowWidth < 500 ? 0 : 50;
  }
}
