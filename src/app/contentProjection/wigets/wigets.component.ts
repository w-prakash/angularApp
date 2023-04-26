import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-wigets',
  templateUrl: './wigets.component.html',
  styleUrls: ['./wigets.component.scss']
})
export class WigetsComponent implements OnInit, AfterViewInit {
@Input() products: any = [];
@ContentChildren('heading') title!: QueryList<any>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log('title...', this.title);
    if(this.title) {
      this.title.first.nativeElement.setAttribute('style', 'color:red; font-weight:bold');
    }


  }
}
