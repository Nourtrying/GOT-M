import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageTeamsRoutingModule } from './manage-teams-routing.module';
import { ManageTeamsComponent } from './manage-teams/manage-teams.component';

@NgModule({
  declarations: [
    ManageTeamsComponent
  ],
  imports: [
    CommonModule,
    ManageTeamsRoutingModule
  ]
})
export class ManageTeamsModule { }
