import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe',
  templateUrl: './built-in-pipe.component.html',
  styleUrls: ['./built-in-pipe.component.scss']
})
export class BuiltInPipeComponent implements OnInit {
  message: string = 'Hello Welcome to Angular Tutorial'
  date = new Date();
  percentage: number = 50;
  currency: number = 50000;
  constructor() { }

  ngOnInit(): void {
  }

}
