import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildrenComponent } from '../view-child-view-children/view-children/view-children.component';
import { ShareUserDataService } from '../shared/share-user-data.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  title = 'angularApp';
  userData: any;
  errorMessage:string = 'Loading...'
  @ViewChild('viewChild') child!: ViewChildrenComponent;

  constructor(public shareDataService: ShareUserDataService) {

  }

  ngOnInit() {
      this.shareDataService.getUsersData().subscribe((users) => {
        this.userData = users
      },(error) => {
        this.errorMessage = error.message
        // console.log(error.message);
      })
  }

  inc() {
    this.child.increment();
  }

  dec() {
    this.child.decrement();
  }
}