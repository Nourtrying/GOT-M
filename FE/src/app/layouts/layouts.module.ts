import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { FrontComponent } from './front/front.component';
import { RouterModule } from '@angular/router';
import { SignUpLayoutComponent } from './sign-up-layout/sign-up-layout.component';
import { SignInLayoutComponent } from './sign-in-layout/sign-in-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { NavBarUserComponent } from './nav-bar-user/nav-bar-user/nav-bar-user.component';
import { SettingsComponent } from './settings/settings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';





@NgModule({
  declarations: [
    AdminComponent,
    MemberComponent,
    FrontComponent,
    SignUpLayoutComponent,
    SignInLayoutComponent,
    NavBarComponent,
    NavBarUserComponent,
    SettingsComponent,
    CalendarComponent,
    NotfoundComponent,

  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    RouterModule
  ]
})
export class LayoutsModule { }
