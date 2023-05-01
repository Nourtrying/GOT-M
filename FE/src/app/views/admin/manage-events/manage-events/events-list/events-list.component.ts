import { Component, OnInit } from '@angular/core';


import { Event } from '../events';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit{
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

  updateEvent(eventtitle: any, startingdate: any, endingdate : any, eventdescr : any, idevent: any) {
     this.resetAlerts();
      console.log("hiiiii you're in the updateEvent fuction")
      console.log(eventtitle.value)
      console.log("id event value!!!!")
      console.log(idevent.value)
     this.eventService.update({idevent : idevent.value, eventtitle :  eventtitle.value, startingdate :  startingdate.value, endingdate :  endingdate.value, eventdescr:  eventdescr.value  }).subscribe(
         (res) => {
         this.success = 'Updated successfully';
         console.log(this.success)
        },
       (err) => {
        this.error = err
        console.log(this.error)
       }
    );
 }
 resetAlerts() {
   this.error = '';
 }

 deleteEvent(id: number) {
    this.resetAlerts();
    console.log(id)
    this.eventService.delete(id).subscribe(
      (res) => {
        this.events = this.events.filter(function (event) {
          return event['idevent'] && +event['idevent'] !== +id;
        });

        this.success = 'Deleted successfully';
        console.log(this.success)
        console.log('Deleted successfully')
      },
      (err) => {
        this.error = err
        console.log(this.error)
      }
    );
  }

  isEventOngoing(event: Event): boolean {
    return new Date(event.endingdate) >= new Date();
  }
}
