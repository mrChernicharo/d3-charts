import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TemplateModule } from './template/template.module';
import { BasicUpdateModule } from './pages/basic-update/basic-update.module';
import { BarModule } from './pages/bar/bar.module';
import { PieModule } from './pages/pie/pie.module';
import { LineModule } from './pages/line/line.module';
import { MultiLineModule } from './pages/multi-line/multi-line.module';
import { GroupedBarModule } from './pages/grouped-bar/grouped-bar.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TemplateModule,
    BasicUpdateModule,
    BarModule,
    PieModule,
    LineModule,
    MultiLineModule,
    GroupedBarModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
