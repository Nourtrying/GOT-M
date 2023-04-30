import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEventsRoutingModule } from './manage-events-routing.module';
import { ManageEventsComponent } from './manage-events/manage-events.component';

import { HttpClientModule } from '@angular/common/http';
import { EventService } from './event.service';
import { AddEventComponent } from './manage-events/add-event/add-event.component';
import { EventsListComponent } from './manage-events/events-list/events-list.component';
import { ModifyEventComponent } from './manage-events/modify-event/modify-event.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'




@NgModule({
  declarations: [
    ManageEventsComponent,
          AddEventComponent,
          EventsListComponent,
          ModifyEventComponent
  ],
  imports: [
    CommonModule,
    ManageEventsRoutingModule,
    HttpClientModule,
    FormsModule
  ], 
  providers: [EventService]
})
export class ManageEventsModule { }
