import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasicUpdateChartComponent } from 'src/app/charts/basic-update-chart/basic-update-chart.component';
import { BasicUpdateTableComponent } from 'src/app/tables/basic-update-table/basic-update-table.component';
import { BasicUpdateComponent } from './basic-update.component';
import { PageHeaderComponent } from 'src/app/template/page-header/page-header.component';
import { TemplateModule } from 'src/app/template/template.module';

const appChildrenComponents = [BasicUpdateChartComponent, BasicUpdateTableComponent];

@NgModule({
  declarations: [BasicUpdateComponent, ...appChildrenComponents],
  imports: [CommonModule, RouterModule, TemplateModule],
})
export class BasicUpdateModule {}
