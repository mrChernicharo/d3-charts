import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BarModule } from './pages/bar/bar.module';
import { BasicUpdateModule } from './pages/basic-update/basic-update.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, BarModule, BasicUpdateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
