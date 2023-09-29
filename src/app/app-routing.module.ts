import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperimentsPageComponent } from './experiments-page/experiments-page.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './experiments-page/calculator/calculator.component';
import { WeatherComponent } from './experiments-page/weather/weather.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'Experiments', component: ExperimentsPageComponent},
  {path:'Experiments/Calculator', component: CalculatorComponent},
  {path:'Experiments/Weather', component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingCompnents = [ExperimentsPageComponent]
