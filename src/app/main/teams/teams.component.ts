import { Component, OnInit } from '@angular/core';
import { SpeakerProfileComponent } from 'src/app/shared/modals/speaker-profile/speaker-profile.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Speaker } from 'src/app/shared/models/speaker.model';
import { CoreTeam } from 'src/app/shared/data/core-team.data';
import { Speakers } from 'src/app/shared/data/speakers.data';

@Component({
  selector: 'pit-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teamMembers: Speaker[] = [];
  siteCreator: Speaker;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.teamMembers = CoreTeam;
    console.log(this.teamMembers);
    this.siteCreator = Speakers[0];
  }

  showSpeaker(speaker: Speaker) {
    const initialState = {
      speaker
    };
    this.modalService.show(SpeakerProfileComponent, { class: 'modal-lg', animated: true, initialState });
  }

}
