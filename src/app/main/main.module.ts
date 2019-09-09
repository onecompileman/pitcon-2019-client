import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SessionsComponent } from './sessions/sessions.component';
import { TeamsComponent } from './teams/teams.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [MainComponent, HomeComponent, NavbarComponent, FooterComponent, SpeakersComponent, SessionsComponent, TeamsComponent, AboutComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
