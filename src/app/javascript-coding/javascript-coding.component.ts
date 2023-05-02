import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-coding',
  templateUrl: './javascript-coding.component.html',
  styleUrls: ['./javascript-coding.component.scss']
})
export class JavascriptCodingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.runJsCoding();
  }

  runJsCoding() {
    //Flat Array
    // let array = [1,2,[3,4,[5,6,[7,8],[9,10],[11,12,[13,14],[1,3,[4,6]]]]]]
    // let modify = [];
    // let unique:any = [];
    // modify = array.toString().split(',');
    // console.log(modify);
    // for (let i = 0; i < modify.length; i++) {
    //     if(!unique.includes(parseInt(modify[i]))) {
    //       unique.push(parseInt(modify[i]))
    //     }
    // }
    // console.log('unique...', unique);

    //Print 1 - 100 without using forloop
    // runJsCoding(start:number, end:number) {
    //   if(start < end) {
    //     start+=1;
    //     console.log('start...', start, end);
    //     this.runJsCoding(start, end);
    //   }


    // add value in array specific position
    // let array = ['jan','feb','april','may'];
    // console.log(array.splice(2,0,'march'));
    // console.log(array);

    //find the second largest number in the array
    // let array = [80,57,29,62,10,82,100,98];
    // let max = Math.max(...array);
    // let temp=0;
    // let secondHighestValue = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if(array[i] != max) {
    //       if(temp < array[i]) {
    //           temp = array[i]
    //       }
    //     }
    // }
    // console.log(temp);
    // secondHighestValue = temp;
    // console.log('secondHighestValue...', secondHighestValue);

    //MobileNumber Validation
    // var num = '8686609619';
    //   if((num.length > 10 || num.length < 10) && num.includes(`/g[a-b]`)) {
    //     console.log('not a valid number');
    //   } else {
    //     console.log('mobile number is valid');
    //   }

    //Destructing
  //   let array = 
  //   {
  //     name: 'bhavesh',
  //     age: '30'
  //   }
  
  // console.log(array);
  // let {name:fa,age} = array;
  // console.log(fa, age);
  // }

  //Reduce
  // let array = [1,2,3,4,5,6,7,8,9,10];
  // let totalNum =  array.reduce((acc, curr) => {
  //     acc += curr;
  //     return acc;
  //   },0)
  //   console.log('total Num...', totalNum);
  
  //Reduce using Alpha
  let array = ['a','b','c','d','e','f','a','b','d','e','f','g','a']
  array.reduce((acc:any,curr:any) => {
          if(acc[curr]) {
            acc[curr] = acc[curr] + 1;
          } else {
          acc[curr] = 1;
          }
          return acc;
     },{})


    }
}
