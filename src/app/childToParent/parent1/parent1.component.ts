import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {
  msgFromChild = '';
  constructor() { }

  ngOnInit(): void {
  }


  getMessageFromParent(data:string) {
    this.msgFromChild = data;
  }

}
