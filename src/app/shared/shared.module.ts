import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerProfileComponent } from './modals/speaker-profile/speaker-profile.component';
import { ModalModule, AccordionModule } from 'ngx-bootstrap';
import * as fromPipes from './pipes';
@NgModule({
  entryComponents: [
    SpeakerProfileComponent
  ],
  declarations: [
    SpeakerProfileComponent,
    ...fromPipes.pipes
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot()
  ],
  exports: [
    ModalModule,
    AccordionModule,
    ...fromPipes.pipes
  ]
})
export class SharedModule { }
