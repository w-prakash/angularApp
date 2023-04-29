import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  email: FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
    console.log(this.email.dirty);
  }

}
