import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomePipeComponent } from './custome-pipe.component';

describe('CustomePipeComponent', () => {
  let component: CustomePipeComponent;
  let fixture: ComponentFixture<CustomePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
