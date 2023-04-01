import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RostersRoutingModule } from './rosters-routing.module';
import { RostersComponent } from './rosters/rosters.component';


@NgModule({
  declarations: [
    RostersComponent
  ],
  imports: [
    CommonModule,
    RostersRoutingModule
  ]
})
export class RostersModule { }
