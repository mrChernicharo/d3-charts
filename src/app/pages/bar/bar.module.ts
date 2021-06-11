import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BarChartComponent } from 'src/app/charts/bar-chart/bar-chart.component';
import { BarTableComponent } from 'src/app/tables/bar-table/bar-table.component';
import { BarComponent } from './bar.component';

const appChildComponents = [BarChartComponent, BarTableComponent];

@NgModule({
  declarations: [BarComponent, ...appChildComponents],
  imports: [CommonModule],
  exports: [BarChartComponent, BarTableComponent],
})
export class BarModule {}
