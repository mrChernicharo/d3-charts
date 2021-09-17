import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedBarChartComponent } from 'src/app/charts/grouped-bar-chart/grouped-bar-chart.component';
import { GroupedBarTableComponent } from 'src/app/tables/grouped-bar-table/grouped-bar-table.component';
import { GroupedBarComponent } from './grouped-bar.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from 'src/app/template/template.module';

@NgModule({
  declarations: [GroupedBarComponent, GroupedBarTableComponent, GroupedBarChartComponent],
  imports: [CommonModule, RouterModule, TemplateModule],
  exports: [GroupedBarComponent, GroupedBarChartComponent, GroupedBarTableComponent],
})
export class GroupedBarModule {}
