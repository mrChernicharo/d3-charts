import { Component, HostListener, OnInit } from '@angular/core';
import { cities, ICity } from 'src/app/utils/pieHelper';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent implements OnInit {
  title = 'Pie';
  windowWidth: number;
  chartMargins: number;

  citiesData: ICity[];
  selectedCity: ICity;
  pointer = 0;

  constructor() {}

  ngOnInit(): void {
    this.citiesData = cities;

    this.onResize();
    this.updateSelectedCity();
  }

  toggleLeft() {
    this.pointer = this.pointer === 0 ? this.citiesData.length - 1 : --this.pointer;
    this.updateSelectedCity();
  }
  toggleRight() {
    this.pointer = this.pointer === this.citiesData.length - 1 ? 0 : ++this.pointer;
    this.updateSelectedCity();
  }

  updateSelectedCity() {
    this.selectedCity = this.citiesData[this.pointer];
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
    this.chartMargins = this.windowWidth < 600 ? 0 : 50;
  }
}
