import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custome-pipe',
  templateUrl: './custome-pipe.component.html',
  styleUrls: ['./custome-pipe.component.scss']
})
export class CustomePipeComponent implements OnInit {
mathNum: number = 0;
message: string = 'Hello Welcome to Angular Tutorial'
userData: any;
constructor(private http: HttpClient) { 
  // let data = this.http.get('https://dummyjson.com/users');
  //     data.subscribe((response) => {
  //       this.userData = response
  //       console.log(this.userData.users);
  //     })
    // fetch('https://dummyjson.com/users')
    // .then((data) => {
    //   console.log(data);
    //   data.json().then((res) => {
    //     this.userData = res.users;
    //     console.log('userData...', this.userData);      
    //   })
    // })   
  }

  ngOnInit(): void {
    this.getDataUsers();
  }

  getDataUsers() {
    return new Promise((resolve, reject) => {
     this.http.get('https://dummyjson.com/users')
          .subscribe((response) => {
            if(response) {
              this.userData = Object.assign({},response);
              console.log(response);
              return resolve(response)
            } else {
              reject(new Error('Unable to get data...'))
            }
          })
    })
  }
}
