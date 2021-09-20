import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplateModule } from 'src/app/template/template.module';
import { StackedBarsComponent } from './stacked-bars.component';
import { StackedBarsChartComponent } from '../../charts/stacked-bars-chart/stacked-bars-chart.component';

@NgModule({
  declarations: [StackedBarsComponent, StackedBarsChartComponent],
  imports: [CommonModule, TemplateModule, RouterModule],
  exports: [StackedBarsComponent, StackedBarsChartComponent],
})
export class StackedBarsModule {}
