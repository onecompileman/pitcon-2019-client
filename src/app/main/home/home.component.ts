import { Component, OnInit } from '@angular/core';
import { Countdown } from '../../shared/models/countdown.model';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { differenceInSeconds } from 'date-fns';
import { Speaker } from 'src/app/shared/models/speaker.model';
import { Speakers } from 'src/app/shared/data/speakers.data';

@Component({
  selector: 'pit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countdown$: Observable<Countdown>;
  targetDate = new Date('2019-11-17');
  randomSpeaker: Speaker;

  constructor() { }

  ngOnInit() {
    this.countdown$ = interval(1000).pipe(
      map(() => this.getCountdown())
    );
    this.randomSpeaker = Speakers[Math.ceil(Math.random() * Speakers.length)];
  }

  private getCountdown(): Countdown {
    let secondsDiff = differenceInSeconds(
      this.targetDate,
      new Date()
    );
    let days = Math.floor(secondsDiff / 86400).toString();
    days = '0'.repeat(2 - days.length) + days;
    secondsDiff = secondsDiff % 86400;
    let hours = Math.floor(secondsDiff / 3600).toString();
    hours = '0'.repeat(2 - hours.length) + hours;
    secondsDiff = secondsDiff % 3600;
    let minutes = Math.floor(secondsDiff / 60).toString();
    minutes = '0'.repeat(2 - minutes.length) + minutes;
    secondsDiff = secondsDiff % 60;
    const seconds = '0'.repeat(2 - secondsDiff.toString().length) + secondsDiff;
    return {
      days, hours, minutes, seconds
    };
  }

}
