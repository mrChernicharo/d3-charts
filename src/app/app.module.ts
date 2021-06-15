import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BarModule } from './pages/bar/bar.module';
import { BasicUpdateModule } from './pages/basic-update/basic-update.module';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { PieComponent } from './pages/pie/pie.component';
import { PieTableComponent } from './tables/pie-table/pie-table.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PieChartComponent, PieComponent, PieTableComponent],
  imports: [BrowserModule, AppRoutingModule, BarModule, BasicUpdateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
