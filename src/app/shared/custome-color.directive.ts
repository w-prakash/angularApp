import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomeColor]'
})
export class CustomeColorDirective {

  constructor(public elementRef: ElementRef) {

    // this.elementRef.nativeElement.setAttribute('style', 'background-color: purple;')
   }

   @HostListener('mouseover') click() {
      console.log('mouseover click')
   }

   @HostListener('mouseout') remove() {
    console.log('mouse removed')
   }

  //  @HostListener('window: scroll',['$event']) scroll(scrollY: number) {
  //   console.log(scrollY);
  //  }
}
