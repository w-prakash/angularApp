import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import{ ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss']
})
export class ObserverComponent implements OnInit {
  // observer: any

  constructor() { }

  ngOnInit(): void {

    // let observe = new Observable((observe) => {
    //   setTimeout(() => {observe.next('10')}, 1000);
    //   setTimeout(() => {observe.next('20')}, 2000);
    //   // setTimeout(() => {observe.error('Error Occurred')}, 2000);
    //   setTimeout(() => {observe.next('30')}, 3000);
    //   setTimeout(() => {observe.next('40')}, 4000);
    //   setTimeout(() => {observe.complete()}, 3000);
    //   // setTimeout(() => {observe.error('Error Occurred')}, 5000);
    // });
    // observe.subscribe((res) => {
    //   console.log(res);
    // }, error => {console.log(error)},
    // () => {console.log('completed')})

  //   this.observer = new Observable((observer) => {
  //       let counter = 0;
  //       // setInterval(() => {
  //       //   counter = counter + 1;
  //       //   observer.next(counter);
  //       // },1000)
  //   })

  //   this.observer.subscribe((res:any) => {console.log(res)})
  // }
  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.observer.unsubscribe();
  // let subject =  new Subject();
  // let data = ajax('https://jsonplaceholder.typicode.com/users')
  //     // data.subscribe((res:any) => {console.log(res.response)})
  //     // data.subscribe((res:any) => {console.log(res.response)})
  //     // data.subscribe((res:any) => {console.log(res.response)})
  //     subject.subscribe((res:any) => {console.log(res.response)});
  //     subject.subscribe((res:any) => {console.log(res.response)});
  //     data.subscribe(subject)


  //Observable
    let ob = new Observable(observe => {
      observe.next(Math.random());
    });
    ob.subscribe(ab => console.log("Subscriber 1...",ab));
    ob.subscribe(ab => console.log("Subscriber 2...",ab));

        

  //Subject
  let sSubject = new Subject();
      sSubject.subscribe((res) => {console.log('Subject 1', res)})
      sSubject.subscribe((res) => {console.log('Subject 2', res)})
      sSubject.next(Math.random());


  //Behavior Subject
  let bSubject = new BehaviorSubject('10');
      bSubject.subscribe((res:any) => {console.log('Behavior Subject 1...',res)})
      // bSubject.subscribe((res:any) => {console.log('Behavior Subject 2...',res)})
      bSubject.next('20');

  //Replay Subject
  let replySubject = new ReplaySubject(2);   
      replySubject.next(10);
      replySubject.next(20);
      replySubject.next(30);
      replySubject.next(40);
      replySubject.subscribe((res:any) => {console.log('Replay Subject 1...',res)}); //Ouput: 10,20,30,40

      
  //Async Subject:
  let asyncSubject = new AsyncSubject();    
      asyncSubject.next(10);
      asyncSubject.next(20);
      asyncSubject.complete();
      asyncSubject.next(30);
      asyncSubject.subscribe((res:any) => {console.log('Async Subject 1', res)}) //Output: 30
  }
}
