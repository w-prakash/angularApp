import { Component, OnInit } from '@angular/core';
import { MessageShareService } from '../services/message-share.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private sendMsgService: MessageShareService) { }

  ngOnInit(): void {
  }

  sendMessage(msg:any) {
    console.log(msg.value);
    this.sendMsgService.sendMessageNotify(msg.value);
  }
}
