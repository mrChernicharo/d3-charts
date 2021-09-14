import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiLineChartComponent } from 'src/app/charts/multi-line-chart/multi-line-chart.component';
import { MultiLineComponent } from './multi-line.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from 'src/app/template/template.module';

@NgModule({
  declarations: [MultiLineComponent, MultiLineChartComponent],
  imports: [CommonModule, RouterModule, TemplateModule],
  exports: [MultiLineChartComponent],
})
export class MultiLineModule {}
