import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RostersComponent } from './rosters/rosters.component';

const routes: Routes = [
  {path:'', component:RostersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RostersRoutingModule { }
