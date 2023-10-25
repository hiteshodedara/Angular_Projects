import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTest1Component } from './api-test1.component';

describe('ApiTest1Component', () => {
  let component: ApiTest1Component;
  let fixture: ComponentFixture<ApiTest1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiTest1Component]
    });
    fixture = TestBed.createComponent(ApiTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
