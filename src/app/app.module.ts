import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicUpdateComponent } from './pages/basic-update/basic-update.component';
import { HomeComponent } from './pages/home/home.component';
import { BarModule } from './pages/bar/bar.module';

@NgModule({
  declarations: [AppComponent, BasicUpdateComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, BarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
