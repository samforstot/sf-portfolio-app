import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperimentsPageComponent } from './experiments-page/experiments-page.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'Experiments', component: ExperimentsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingCompnents = [ExperimentsPageComponent]
