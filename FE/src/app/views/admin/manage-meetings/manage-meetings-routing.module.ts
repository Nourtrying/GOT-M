import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageMeetingsComponent } from './manage-meetings/manage-meetings.component';
const routes: Routes = [
  {
    path: '',
    component: ManageMeetingsComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageMeetingsRoutingModule { }
