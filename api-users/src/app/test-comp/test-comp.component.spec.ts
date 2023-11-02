import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompComponent } from './test-comp.component';

describe('TestCompComponent', () => {
  let component: TestCompComponent;
  let fixture: ComponentFixture<TestCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCompComponent]
    });
    fixture = TestBed.createComponent(TestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
