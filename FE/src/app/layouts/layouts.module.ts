import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { FrontComponent } from './front/front.component';
import { RouterModule } from '@angular/router';
import { SignUpLayoutComponent } from './sign-up-layout/sign-up-layout.component';
import { SignInLayoutComponent } from './sign-in-layout/sign-in-layout.component';


@NgModule({
  declarations: [
    AdminComponent,
    MemberComponent,
    FrontComponent,
    SignUpLayoutComponent,
    SignInLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    RouterModule
  ]
})
export class LayoutsModule { }
