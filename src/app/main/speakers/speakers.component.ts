import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SpeakerProfileComponent } from 'src/app/shared/modals/speaker-profile/speaker-profile.component';

@Component({
  selector: 'pit-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  showSpeaker() {
    this.modalService.show(SpeakerProfileComponent, { class: 'modal-lg', animated: true });
  }

}
