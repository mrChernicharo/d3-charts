import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasicUpdateChartComponent } from 'src/app/charts/basic-update-chart/basic-update-chart.component';
import { BasicUpdateTableComponent } from 'src/app/tables/basic-update-table/basic-update-table.component';
import { BasicUpdateComponent } from './basic-update.component';

const appChildrenComponents = [
  BasicUpdateChartComponent,
  BasicUpdateTableComponent,
];
@NgModule({
  declarations: [BasicUpdateComponent, ...appChildrenComponents],
  imports: [CommonModule, RouterModule],
})
export class BasicUpdateModule {}
