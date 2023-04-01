import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  date: Date = new Date();
  days: number[] = [];
  events: {[date: string]: string[]} = {};
  weeks: number[] = Array.from({length: 5}, (_, i) => i); 
  constructor() { }

  ngOnInit(): void {
    this.buildCalendar();
  }

  buildCalendar(): void {
    this.days = [];
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const start = firstDay.getDay();
    const end = lastDay.getDate();
    for (let i = 1; i <= end; i++) {
      this.days.push(i);
    }
  }

  previousMonth(): void {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    this.date = new Date(year, month - 1, 1);
    this.buildCalendar();
  }

  nextMonth(): void {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    this.date = new Date(year, month + 1, 1);
    this.buildCalendar();
  }

  addEvent(day: number): void {
    const date = new Date(this.date.getFullYear(), this.date.getMonth(), day);
    const dateString = date.toISOString().substr(0, 10);
    const eventName = prompt('Enter event name:');
    if (eventName) {
      if (!this.events[dateString]) {
        this.events[dateString] = [];
      }
      this.events[dateString].push(eventName);
    }
  }

  getEvents(day: number): string[] {
    const date = new Date(this.date.getFullYear(), this.date.getMonth(), day);
    const dateString = date.toISOString().substr(0, 10);
    return this.events[dateString] || [];
  }
}
