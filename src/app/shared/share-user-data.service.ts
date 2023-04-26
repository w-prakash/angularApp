import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
@Injectable({
  providedIn: 'root'
})
export class ShareUserDataService {
  userData: any;
  constructor(private http: HttpClient) { 
  // console.log('service called');
  }


  getUsersData(): Observable<any> {
   return this.http.get("https://jsonplaceholder.typicode.com/userss")
  .pipe(catchError(this.errorHandler))
  }

 public errorHandler() {
    // console.log('error function called....');
  //  return "Server is Down Please try again...";
  return throwError(() => new Error('Server is Down Please try again...'))
  }

}
