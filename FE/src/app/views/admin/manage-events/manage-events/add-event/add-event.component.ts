import { Component, OnInit } from '@angular/core';

import { Event } from '../events';
import { EventService } from '../../event.service';


import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit{
  events: Event[] = []
  
  error = '';
  success = '';
  
  event: Event =  {idevent:0, eventtitle:'', startingdate:new Date(), endingdate:new Date(), eventdescr: '' };

  constructor(private eventService: EventService) {}

  ngOnInit() {

  }

  addEvent(f: NgForm) {
    this.resetAlerts();
    this.event.startingdate = new Date(this.event.startingdate);
this.event.endingdate = new Date(this.event.endingdate);

    this.eventService.store(this.event).subscribe(
      
      (res: Event) => {
        console.log("perhaps here?")
        // Update the list of cars
        this.events.push(res)

        // Inform the user
        this.success = 'Created successfully';

        // Reset the form
        f.reset();
      },
      (err) => {
        console.log("event is")
        console.log(this.event)
        console.log("An error occurred:");
      console.log(err);
      this.error = err.message;
      console.log("Response body:");
      console.log(err.error);
      }
    );
  }
  
  resetAlerts() {
    this.error = '';
    this.success = '';
  }

  
  

}
