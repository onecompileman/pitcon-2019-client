import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerProfileComponent } from './modals/speaker-profile/speaker-profile.component';
import { ModalModule, AccordionModule } from 'ngx-bootstrap';
@NgModule({
  entryComponents: [
    SpeakerProfileComponent
  ],
  declarations: [SpeakerProfileComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot()
  ],
  exports: [
    ModalModule,
    AccordionModule
  ]
})
export class SharedModule { }
