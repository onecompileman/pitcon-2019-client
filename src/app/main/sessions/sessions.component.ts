import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/shared/models/session.model';
import { Sessions } from 'src/app/shared/data/sessions.data';
import { find } from 'lodash';
import { Speakers } from 'src/app/shared/data/speakers.data';

@Component({
  selector: 'pit-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  sessions: Session[] = [];

  constructor() { }

  ngOnInit() {
    this.sessions = Sessions.map(session => {
      session.speaker = find(Speakers, { id: session.speakerId });
      return session;
    });
  }

}
