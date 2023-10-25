import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivFlexesComponent } from './div-flexes.component';

describe('DivFlexesComponent', () => {
  let component: DivFlexesComponent;
  let fixture: ComponentFixture<DivFlexesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivFlexesComponent]
    });
    fixture = TestBed.createComponent(DivFlexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
