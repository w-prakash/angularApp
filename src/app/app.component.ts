import { Component, OnInit, ViewChild } from '@angular/core';
import { ShareUserDataService } from './shared/share-user-data.service';
import { ViewChildrenComponent } from './view-child-view-children/view-children/view-children.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
