import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarUserComponent } from './nav-bar-user/nav-bar-user.component';
const routes: Routes = [
  {
    path: '',
    component: NavBarUserComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarUserRoutingModule { }
