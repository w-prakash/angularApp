import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListnerHostBindComponent } from './host-listner-host-bind.component';

describe('HostListnerHostBindComponent', () => {
  let component: HostListnerHostBindComponent;
  let fixture: ComponentFixture<HostListnerHostBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostListnerHostBindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostListnerHostBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
