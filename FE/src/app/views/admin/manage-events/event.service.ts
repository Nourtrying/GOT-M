import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams   } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs'
import { Event } from './manage-events/events';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:7882/api/event';
                
                
  getAll() {
    console.log("getting all events...")
    return this.http.get(`${this.baseUrl}/list.php`).pipe(
      map((res: any) => {
        console.log("response received:", res)
        return res['data'];
      }),
      catchError(error => {
        console.log("apparently you're here")
        console.error("Error:", error);
        return throwError(error);
      })
    );
  }

  store(event: Event) {
    console.log(event)
    return this.http.post(`${this.baseUrl}/store.php`, { data: event }).pipe(
      map((res: any) => {
        console.log("you hereeee fel map mtaa store?")
        return res['data'];
      }),
      catchError(error => {
        console.log("are in the error of store?")
        console.error("Error:", error);
        return throwError(error);
      })
    );
  }

  update(event: Event) {
    console.log('update(event: Event)')
    console.log(event)
    
    return this.http.put(`${this.baseUrl}/update.php`, { data: event });
  }

  delete(id: any) {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete.php`, { params: params });
  }
  
}
