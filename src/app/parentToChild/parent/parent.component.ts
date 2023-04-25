import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentMessage:any = [
    {
      userName: 'Bhavesh',
      age: 30
    },
    {
      userName: 'John',
      age: 25
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
