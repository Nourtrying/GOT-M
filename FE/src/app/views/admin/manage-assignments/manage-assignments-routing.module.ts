import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAssignmentsComponent } from './manage-assignments/manage-assignments.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment/create-assignment.component';


const routes: Routes = [
  {
    path: '',
    component: ManageAssignmentsComponent,
    children: [
      {
        path: 'createAssignment',
        loadChildren: () =>
          import('./create-assignment/create-assignment.module').then((m) => m.CreateAssignmentModule),
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAssignmentsRoutingModule { }
