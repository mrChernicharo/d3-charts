import { Component, OnInit } from '@angular/core';
import { ICar } from '../../utils/barHelper';
import { initialCars, createItem } from 'src/app/utils/barHelper';

@Component({
  selector: 'app-basic-update',
  templateUrl: './basic-update.component.html',
  styleUrls: ['./basic-update.component.scss'],
})
export class BasicUpdateComponent implements OnInit {
  title = 'D3 Basic Update';
  carsData: ICar[];
  headerItems = ['description', 'value', 'year'];

  constructor() {}

  ngOnInit() {
    this.carsData = initialCars;
  }

  addCar() {
    this.carsData = [...this.carsData, createItem()];
  }

  popCar() {
    this.carsData = [...this.carsData.slice(0, this.carsData.length - 1)];
  }
}
