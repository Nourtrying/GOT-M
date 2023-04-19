import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { FrontComponent } from './layouts/front/front.component';
import { MemberComponent } from './layouts/member/member.component';
import { CreateAssignmentComponent } from './views/admin/manage-assignments/create-assignment/create-assignment/create-assignment.component';
import { SignUpLayoutComponent } from './layouts/sign-up-layout/sign-up-layout.component';
import { SignInLayoutComponent } from './layouts/sign-in-layout/sign-in-layout.component';


const routes: Routes = [
  {path:'', component:FrontComponent, children:
  [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'home', loadChildren:() => import('./views/front/home/home.module').then(m => m.HomeModule)},
    {path:'events', loadChildren:() => import('./views/front/events/events.module').then(m => m.EventsModule)},
    {path:'about', loadChildren:() => import('./views/front/about/about.module').then(m => m.AboutModule)},
    {path:'rosters', loadChildren:() => import('./views/front/rosters/rosters.module').then(m => m.RostersModule)},
    // {path:'signUp', loadChildren:() => import('./views/front/sign-up/sign-up.module').then(m => m.SignUpModule)},
    // {path:'signIn', loadChildren:() => import('./views/front/sign-in/sign-in.module').then(m => m.SignInModule)},


  ]},

  {path:'admin', component:AdminComponent, children:[
    { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
    {path:'dashboard', loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},

    // {path:'manageAssignments', loadChildren:()=>import('./views/admin/manage-assignments/manage-assignments.module').then(m=>m.ManageAssignmentsModule),
    // children: [
    //   { path: 'manageAssingment/createAssignment', component: CreateAssignmentComponent }
    // ]}
    {path:'manageAssignments', loadChildren:()=>import('./views/admin/manage-assignments/manage-assignments.module').then(m=>m.ManageAssignmentsModule)},

    {path:'manageEvents', loadChildren:()=>import('./views/admin/manage-events/manage-events.module').then(m=>m.ManageEventsModule)},

    {path:'manageMembers', loadChildren:()=>import('./views/admin/manage-members/manage-members.module').then(m=>m.ManageMembersModule)},

    {path:'manageTeams', loadChildren:()=>import('./views/admin/manage-teams/manage-teams.module').then(m=>m.ManageTeamsModule)}
  ]},
  
  {path:'member', component:MemberComponent},
  {path:'sign-up', component:SignUpLayoutComponent},
  {path:'sign-in', component:SignInLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
