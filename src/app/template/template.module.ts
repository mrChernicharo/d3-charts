import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NavBarComponent } from '../template/nav-bar/nav-bar.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [NavBarComponent, PageHeaderComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  exports: [NavBarComponent, PageHeaderComponent],
})
export class TemplateModule {}
