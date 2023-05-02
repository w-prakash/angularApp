import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptCodingComponent } from './javascript-coding.component';

describe('JavascriptCodingComponent', () => {
  let component: JavascriptCodingComponent;
  let fixture: ComponentFixture<JavascriptCodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptCodingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
