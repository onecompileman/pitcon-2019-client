import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SessionsComponent } from './sessions/sessions.component';
import { TeamsComponent } from './teams/teams.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'speakers',
        component: SpeakersComponent
      },
      {
        path: 'sessions',
        component: SessionsComponent
      },
      {
        path: 'team',
        component: TeamsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
