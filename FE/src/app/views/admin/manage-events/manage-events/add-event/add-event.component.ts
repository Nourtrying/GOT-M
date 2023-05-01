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

  parseStringintoDate(dateString: String){
    //const dateString = '2023-05-21';
    const parts = dateString.split('-');
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Month is zero-indexed in JavaScript
    const day = parseInt(parts[2]);
    const date = new Date(year, month, day);

    // To format the date as yyyy-MM-dd:
    const formattedDate = date.toISOString().slice(0, 10);
    console.log(formattedDate); // Output: "2023-05-21"

    return date
  }

  addEvent(f: NgForm) {
    this.resetAlerts();
    console.log("this.event at the beg")
    console.log(this.event)

    console.log("startingDate")
    console.log(this.event.startingdate)
    
    /*this.event.startingdate = this.parseStringintoDate(this.event.startingdate);
    this.event.endingdate = new Date(this.event.endingdate);*/

    
    this.eventService.store(this.event).subscribe(
      
      (res: Event) => {
        console.log("okay i think its success")
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

  
  


