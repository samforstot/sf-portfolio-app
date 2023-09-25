import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperimentsPageComponent } from './experiments-page/experiments-page.component';
const routes: Routes = [
  {path:'Experiments', component: ExperimentsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingCompnents = [ExperimentsPageComponent]
