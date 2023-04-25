import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ViewChildrenComponent } from './view-children/view-children.component';

@Component({
  selector: 'app-view-child-view-children',
  templateUrl: './view-child-view-children.component.html',
  styleUrls: ['./view-child-view-children.component.scss']
})
export class ViewChildViewChildrenComponent implements OnInit, AfterViewInit{
  // @ViewChild('pen')ele!: ElementRef;
  // @ViewChildren('pen') ele!: QueryList<any>;
  @ViewChild('viewChild') child!: ViewChildrenComponent;

  constructor() { }


  ngAfterViewInit() {
    // console.log("element...",this.ele);
    // this.ele.first.nativeElement.style.color = 'green';
    // this.ele.last.nativeElement.style.fontWeight = 'bold';
  }

  ngOnInit(): void {
    // let doc = document.getElementById('pen') as HTMLElement;
    //     doc.setAttribute('style', 'color:red; text-decoration: underline; font-weight: bold');
  }

  inc() {
    this.child.increment();
  }

  dec() {
    this.child.decrement();
  }
    
}
