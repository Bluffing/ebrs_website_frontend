import { Component } from '@angular/core';

@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.css']
})
export class HomeCalendarComponent {
  viewDate: Date = new Date(Date.now());
  events = [
    new CalendarEvent
  ]
}

export class Event : CalendarEvent<any> {

}
