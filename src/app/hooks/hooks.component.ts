import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../hooks/users'
@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit {
  data: string = '';
  username: string = '';
  password: string = '';
  constructor(public userInfo: UserInterface) {
    
  }

  ngOnInit(): void {
  }

  sendData() {
    this.userInfo.username = this.username;
    this.userInfo.password = this.password;
    console.log('userInfo...', this.userInfo);
  }
}
