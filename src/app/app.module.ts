import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TemplateModule } from './template/template.module';
import { BasicUpdateModule } from './pages/basic-update/basic-update.module';
import { BarModule } from './pages/bar/bar.module';
import { PieModule } from './pages/pie/pie.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    BasicUpdateModule,
    BarModule,
    PieModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
