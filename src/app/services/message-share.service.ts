import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageShareService {
  constructor() { }

  // public subj = new Subject();
  // public bheSubj = new BehaviorSubject("Welcome msg from service");

  // sendMessageNotify(data:string) {
  // this.bheSubj.next(data);
  // }
  private message = new Observable

  sendMessageNotify(data:string) {  
    let observe = new Observable((observer) => {
      observer.next(this.sendMessageNotify)
      console.log(this.sendMessageNotify);
});
  }
  
}
