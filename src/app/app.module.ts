import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { RostersComponent } from './rosters/rosters.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    AboutComponent,
    HomeComponent,
    EventsComponent,
    RostersComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
