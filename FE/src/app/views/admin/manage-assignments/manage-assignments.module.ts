import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAssignmentsRoutingModule } from './manage-assignments-routing.module';
import { ManageAssignmentsComponent } from './manage-assignments/manage-assignments.component';
import { CreateAssignmentModule } from './create-assignment/create-assignment.module';




@NgModule({
  declarations: [
    ManageAssignmentsComponent
  ],
  imports: [
    CommonModule,
    ManageAssignmentsRoutingModule
  ]
})
export class ManageAssignmentsModule { }
