import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildViewChildrenComponent } from './view-child-view-children.component';

describe('ViewChildViewChildrenComponent', () => {
  let component: ViewChildViewChildrenComponent;
  let fixture: ComponentFixture<ViewChildViewChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildViewChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildViewChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
