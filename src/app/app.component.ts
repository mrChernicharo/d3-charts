import { Component, OnInit } from '@angular/core';
import { ICar, initialCars } from './utils/barHelper';
import { vehicle } from 'faker';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ActivationEnd,
  NavigationEnd,
  Route,
  Router,
  Routes,
} from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  carsData: ICar[] = initialCars;
  currentUrl = '/';
  countApiUrl = 'https://api.countapi.xyz/hit/';
  namespace = 'chernicharo-d3-charts-app/';
  secretKey = 'zuYfRkvDaZXL4zalSMfFJNmzOtfnricK';
  endpoint: string;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.endpoint = this.countApiUrl + this.namespace + this.secretKey;

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        tap((e: NavigationEnd) => (this.currentUrl = e.url))
      )
      .subscribe(() => console.log(this.currentUrl));

    this.http.get(this.endpoint).subscribe(
      (d) => console.log(d),
      (err) => console.log(err),
      () => console.log('couter api call successfuly completed')
    );
  }
}
