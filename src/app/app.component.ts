import { Component, OnInit } from '@angular/core';
import { createItem, ICar, initialCars } from './utils/barHelper';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  carsData: ICar[] = initialCars;
  currentUrl = '/';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        tap((e: NavigationEnd) => (this.currentUrl = e.url))
      )
      .subscribe(() => console.log(this.currentUrl));
    // this.
  }
}
