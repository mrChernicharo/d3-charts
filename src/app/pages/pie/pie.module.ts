import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PieChartComponent } from 'src/app/charts/pie-chart/pie-chart.component';
import { TemplateModule } from 'src/app/template/template.module';
import { PieTableComponent } from 'src/app/tables/pie-table/pie-table.component';
import { PieComponent } from './pie.component';

const appChildComponents = [PieChartComponent, PieTableComponent];

@NgModule({
  declarations: [PieComponent, ...appChildComponents],
  imports: [CommonModule, RouterModule, TemplateModule],
  exports: [PieChartComponent, PieTableComponent],
})
export class PieModule {}
