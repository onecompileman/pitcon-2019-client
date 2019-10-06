import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SpeakerProfileComponent } from 'src/app/shared/modals/speaker-profile/speaker-profile.component';
import { Speaker } from 'src/app/shared/models/speaker.model';
import { Speakers } from 'src/app/shared/data/speakers.data';

@Component({
  selector: 'pit-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  speakers: Speaker[] = [];

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.speakers = Speakers;
  }

  showSpeaker(speaker: Speaker) {
    const initialState = {
      speaker
    };
    this.modalService.show(SpeakerProfileComponent, { class: 'modal-lg', animated: true, initialState });
  }

}
