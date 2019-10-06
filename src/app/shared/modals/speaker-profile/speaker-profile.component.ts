import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Speaker } from '../../models/speaker.model';

@Component({
  selector: 'pit-speaker-profile',
  templateUrl: './speaker-profile.component.html',
  styleUrls: ['./speaker-profile.component.scss']
})
export class SpeakerProfileComponent implements OnInit {

  speaker: Speaker;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
