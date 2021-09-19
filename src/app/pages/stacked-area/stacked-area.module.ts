import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedAreaChartComponent } from 'src/app/charts/stacked-area-chart/stacked-area-chart.component';
import { StackedAreaTableComponent } from 'src/app/tables/stacked-area-table/stacked-area-table.component';
import { StackedAreaComponent } from './stacked-area.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from 'src/app/template/template.module';

@NgModule({
  declarations: [StackedAreaComponent, StackedAreaTableComponent, StackedAreaChartComponent],
  imports: [CommonModule, RouterModule, TemplateModule],
  exports: [StackedAreaComponent, StackedAreaChartComponent, StackedAreaTableComponent],
})
export class StackedAreaModule {}
