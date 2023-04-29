import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class GetUserDetailsService {

  constructor(public http: HttpClient, public handleError: HandleErrorService) { }


  getUserDetails(id:any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .pipe((catchError(this.handleError.handleError)));
  }

  // handleError() {
  //   return throwError(() => new Error('Cannot get user details from the server.'))
  // }
}
