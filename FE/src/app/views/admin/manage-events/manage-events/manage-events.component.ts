import { Component, OnInit } from '@angular/core';

import { Event } from './events';
import { EventService } from '../event.service';



@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.css']
})
export class ManageEventsComponent implements OnInit{
  events: Event[] = [];
  error = '';
  success = '';
        
  constructor(private eventService: EventService) {
  }
        
  ngOnInit() {
    this.getEvents();
  }
        
  getEvents(): void {
    this.eventService.getAll().subscribe(
      (data: Event[]) => {
        console.log("we're fine")
        this.events = data;
        this.success = 'successful retrieval of the event list';
      },
      (err) => {
        console.log("An error occurred:");
        console.log(err);
        this.error = err;
      }
      
      
    );
    console.log("you're in the getMethod!")
  }

}
