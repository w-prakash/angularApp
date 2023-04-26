import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomeDirective]'
})
export class CustomeDirectiveDirective {
  constructor(public eleRef: ElementRef) {
    console.log(eleRef);
    this.eleRef.nativeElement.setAttribute('style', 'color: green;')
   }

}
