import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePlayersComponent } from './manage-players/manage-players.component';

const routes: Routes = [
  {
    path: '',
    component: ManagePlayersComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePlayersRoutingModule { }
