import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  count: number = 10;

  constructor() { }

  ngOnInit(): void {
    // this. set()
  }

  submit(ngForm: NgForm) {
    console.log('form submited', ngForm.value);
  }


  set() {
    setInterval(() => {
      this.count++;
      if(this.count > 100) return;
      console.log(">>>>",this.count);

    },500)
  }
}
