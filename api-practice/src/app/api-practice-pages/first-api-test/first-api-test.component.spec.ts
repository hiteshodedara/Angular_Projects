import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstApiTestComponent } from './first-api-test.component';

describe('FirstApiTestComponent', () => {
  let component: FirstApiTestComponent;
  let fixture: ComponentFixture<FirstApiTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstApiTestComponent]
    });
    fixture = TestBed.createComponent(FirstApiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
