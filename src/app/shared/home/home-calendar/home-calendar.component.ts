import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';

@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.css'],
})
export class HomeCalendarComponent {

  viewDate: Date = new Date(Date.now());
  tmrDateString: string = "2023-05-16";
  events = [
    new Event({
      start: new Date(Date.now()),
      title: "bleak"
    }),
    new Event({
      start: new Date(Date.now()),
      title: "blooza"
    }),
    new Event({
      start: new Date(Date.now()),
      title: "bleakbloozaasdfsd"
    }),
    new Event({
      start: new Date(this.tmrDateString),
      title: "bleakbloozaasdfsd"
    })
  ]
}

class Event implements CalendarEvent<any> {
  start: Date;
  title: string;
  description: string;
  constructor(init?: Partial<Event>) {
    Object.assign(this, init);
  }
}
