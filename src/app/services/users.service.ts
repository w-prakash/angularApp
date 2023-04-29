import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { UserTypeCaste } from './userTypeCaste';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any> {
   return this.http.get('https://jsonplaceholder.typicode.com/users')
   .pipe(map((user) => {
    return user;
   }),catchError(this.handleError));
  }

  public handleError(error: any) {
    // return error.message;
    return throwError(() => new Error('Server is Down Please try again...'))
  }
}
