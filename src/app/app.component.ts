import { Component, OnInit, ViewChild } from '@angular/core';
import { ShareUserDataService } from './shared/share-user-data.service';
import { ViewChildrenComponent } from './view-child-view-children/view-children/view-children.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularApp';
  // userData: any;
  // errorMessage:string = 'Loading...'
  // @ViewChild('viewChild') child!: ViewChildrenComponent;
  menuItems = [
    {
      name: 'Home',
      url: '/home'
    },
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Users',
      url: '/users'
    },
    {
      name: 'Products',
      url: '/products'
    },
    {
      name: 'common',
      url: '/common'
    },
    {
      name: 'Contact',
      url: '/contact'
    }
  ];
  constructor(private router: Router) {

  }

  ngOnInit() {
      // this.shareDataService.getUsersData().subscribe((users) => {
      //   this.userData = users
      // },(error) => {
      //   this.errorMessage = error.message
      //   // console.log(error.message);
      // })
  }

  // inc() {
  //   this.child.increment();
  // }

  // dec() {
  //   this.child.decrement();
  // }

  gotoPage(url: string) {
    console.log(url);
    this.router.navigate([url])
  }
}
