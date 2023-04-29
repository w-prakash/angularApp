import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUserDetailsService } from 'src/app/services/get-user-details.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId: any;
  userInfo: any;
  constructor(
    private route: ActivatedRoute, 
    private _sub: GetUserDetailsService,
    private router: Router) {
    this.userId = this.route.snapshot.params['id'];
    console.log('userId...', this.userId);
   }

  ngOnInit(): void {
    this.getuserInfo()
  }

  getuserInfo() {
    this._sub.getUserDetails(this.userId).subscribe((res) => {
      this.userInfo = res;
      console.log('userInfo...', this.userInfo);
    }, (err) => {
      console.log(err.message);
      window.confirm(err.message);
      this.router.navigate(['/users']);
    })
  }

}
