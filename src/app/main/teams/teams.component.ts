import { Component, OnInit } from '@angular/core';
import { SpeakerProfileComponent } from 'src/app/shared/modals/speaker-profile/speaker-profile.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'pit-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  showSpeaker() {
    this.modalService.show(SpeakerProfileComponent, { class: 'modal-lg', animated: true });
  }

}
