import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageEventsModule } from './manage-events.module';
import { ManageEventsComponent } from './manage-events/manage-events.component';

const routes: Routes = [
  {path:'', component:ManageEventsComponent}  //hmmmmmmmmmm
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageEventsRoutingModule { }
