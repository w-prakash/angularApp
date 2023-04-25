import { Component, OnInit } from '@angular/core';
import { MessageShareService } from '../services/message-share.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  message: any;

  constructor(private msgService: MessageShareService) { }

  ngOnInit(): void {
    // this.msgService.bheSubj.subscribe((msg) => {
    //   this.message = msg;
    // })

    // this.msgService.observe.subscribe((msg) => {console.log(msg);})
  }

}
