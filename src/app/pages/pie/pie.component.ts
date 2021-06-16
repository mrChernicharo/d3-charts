import { Component, OnInit } from '@angular/core';
import { cities, ICity } from 'src/app/utils/pieHelper';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent implements OnInit {
  title = 'Pie';
  citiesData: ICity[];
  windowWidth: number;
  selectedCity: ICity;
  pointer = 0;

  constructor() {}

  ngOnInit(): void {
    this.citiesData = cities;
    this.windowWidth = window.innerWidth;
    this.updateSelectedCity();
  }

  toggleLeft() {
    this.pointer = this.pointer === 0 ? this.citiesData.length - 1 : --this.pointer;
    this.updateSelectedCity();
    // console.log(this.pointer);
  }
  toggleRight() {
    this.pointer = this.pointer === this.citiesData.length - 1 ? 0 : ++this.pointer;
    this.updateSelectedCity();
    // console.log(this.pointer);
  }

  updateSelectedCity() {
    this.selectedCity = this.citiesData[this.pointer];
  }
}
