import { Component, HostListener, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-host-listner-host-bind',
  templateUrl: './host-listner-host-bind.component.html',
  styleUrls: ['./host-listner-host-bind.component.scss'],
})
export class HostListnerHostBindComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  // @HostListener('mouseover') click() {
  //   window.alert('Click')
  // }
}
