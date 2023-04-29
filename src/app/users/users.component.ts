import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any;
  constructor(private _userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(users => {
      console.log('users...', users);

      this.users = users;
    }, error => {
      console.log('err', error.message);
    })
  }

  getUserDetails(item:any) {
    console.log('item...', item.id);
    this.router.navigate([`users/${item.id}`]);
  }

}
