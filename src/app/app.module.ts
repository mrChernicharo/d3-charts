import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './charts/bar/bar.component';
import { BarTableComponent } from './tables/bar-table/bar-table.component';

@NgModule({
  declarations: [AppComponent, BarComponent, BarTableComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
