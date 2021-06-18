import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from 'src/app/charts/line-chart/line-chart.component';
import { LineTableComponent } from 'src/app/tables/line-table/line-table.component';
import { LineComponent } from './line.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from 'src/app/template/template.module';

const appChildComponents = [LineChartComponent, LineTableComponent];

@NgModule({
  declarations: [LineComponent, ...appChildComponents],
  imports: [CommonModule, RouterModule, TemplateModule],
  exports: [LineChartComponent, LineTableComponent],
})
export class LineModule {}
