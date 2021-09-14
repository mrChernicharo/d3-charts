import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './pages/bar/bar.component';
import { BasicUpdateComponent } from './pages/basic-update/basic-update.component';
import { HomeComponent } from './pages/home/home.component';
import { LineComponent } from './pages/line/line.component';
import { MultiLineComponent } from './pages/multi-line/multi-line.component';
import { PieComponent } from './pages/pie/pie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basic-update', component: BasicUpdateComponent },
  { path: 'bar', component: BarComponent },
  { path: 'pie', component: PieComponent },
  { path: 'line', component: LineComponent },
  { path: 'multi-line', component: MultiLineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
