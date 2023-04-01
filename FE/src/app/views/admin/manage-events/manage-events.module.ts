import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEventsRoutingModule } from './manage-events-routing.module';
import { ManageEventsComponent } from './manage-events/manage-events.component';



@NgModule({
  declarations: [

  
    ManageEventsComponent
  ],
  imports: [
    CommonModule,
    ManageEventsRoutingModule
  ]
})
export class ManageEventsModule { }
