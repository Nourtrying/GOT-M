import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageEventsComponent } from './manage-events/manage-events.component';
import { AddEventComponent } from './manage-events/add-event/add-event.component';
import { EventsListComponent } from './manage-events/events-list/events-list.component';
import { ModifyEventComponent } from './manage-events/modify-event/modify-event.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'eventsList',
    pathMatch: 'full'
  },
  { 
    path: '', 
    component: ManageEventsComponent,
    children: [
      { path: 'eventsList', component: EventsListComponent },
      { path: 'addEvent', component: AddEventComponent },
      { path: 'modifyEvent', component: ModifyEventComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageEventsRoutingModule { }
