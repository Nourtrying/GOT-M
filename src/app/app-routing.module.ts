import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { RostersComponent } from './rosters/rosters.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'events', component:EventsComponent},
  {path:'rosters', component:RostersComponent},
  {path:'signIn', component:SignInComponent},
  {path:'signUp', component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
