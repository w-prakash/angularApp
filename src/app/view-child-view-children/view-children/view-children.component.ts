import { AfterViewInit, Component, ComponentRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.scss']
})
export class ViewChildrenComponent implements OnInit {
public count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
