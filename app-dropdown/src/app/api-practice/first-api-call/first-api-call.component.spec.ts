import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstApiCallComponent } from './first-api-call.component';

describe('FirstApiCallComponent', () => {
  let component: FirstApiCallComponent;
  let fixture: ComponentFixture<FirstApiCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstApiCallComponent]
    });
    fixture = TestBed.createComponent(FirstApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
