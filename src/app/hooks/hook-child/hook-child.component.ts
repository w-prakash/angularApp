import { Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.scss']
})
export class HookChildComponent implements OnInit, OnChanges, DoCheck {
@Input() parentData:any;
@ContentChild('content') contentChild!: ElementRef;
@ViewChild('viewChild')  viewChild!: ElementRef;
  constructor() {
    console.log('Constructor called...');
    //Constructor is used for DI
  }

  ngOnInit(): void {
    console.log('ngOnInit called...');
    //It calls only the first time whenever the component is initialized
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    //It calls only when there is Input data available
    console.log('ngOnChanges called...',simpleChanges);
  }

  ngDoCheck() {
    //It calles when ever the completed change in Dom
    console.log('ngDoCheck called...',this.parentData);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called...', this.contentChild);
    this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`)
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called...');
    this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`)
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called...');
    this.viewChild.nativeElement.setAttribute('style', 'color:purple;')
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked called...');
    this.viewChild.nativeElement.setAttribute('style', `color: ${this.parentData}`)

  }

}

