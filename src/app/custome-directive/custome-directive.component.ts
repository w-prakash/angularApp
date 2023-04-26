import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custome-directive',
  templateUrl: './custome-directive.component.html',
  styleUrls: ['./custome-directive.component.scss']
})
export class CustomeDirectiveComponent implements OnInit {
  valueOdd = 'yellow'
  constructor() { }

  ngOnInit(): void {
  }

}
