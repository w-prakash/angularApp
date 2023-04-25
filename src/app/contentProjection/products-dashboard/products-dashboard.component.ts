import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {
  public electronicProducts = [
    {
      name: 'LCD Tv',
      price: 50000
    },
    {
      name: 'Laptop',
      price: 45000
    },
    {
      name: 'Speakers',
      price: 7000
    },
    {
      name: 'Tabs',
      price: 12000
    }
  ]
  public MobileProducts = [
    {
      name: 'OnePlus',
      price: 35000
    },
    {
      name: 'iPhone',
      price: 4000
    },
    {
      name: 'Real Me',
      price: 8000
    },
    {
      name: 'Oppo',
      price: 5000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
