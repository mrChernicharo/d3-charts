import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ICar } from '../../app.component';
import * as d3 from 'd3';
import { createItem, initialCars } from 'src/app/utils/barHelper';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  // carsData: ICar[];
  // headerItems = ['description', 'value', 'year'];

  constructor() {}

  ngOnInit() {
    // this.carsData = initialCars;
  }

  // addCar() {
  //   this.carsData = [...this.carsData, createItem()];
  // }

  // popCar() {
  //   this.carsData = [...this.carsData.slice(0, this.carsData.length - 1)];
  // }
}
