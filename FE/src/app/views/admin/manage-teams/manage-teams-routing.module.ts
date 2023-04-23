import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageTeamsComponent } from './manage-teams/manage-teams.component';
const routes: Routes = [
  {
    path: '',
    component: ManageTeamsComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageTeamsRoutingModule { }
