import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectComponent } from './contect.component';

describe('ContectComponent', () => {
  let component: ContectComponent;
  let fixture: ComponentFixture<ContectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContectComponent]
    });
    fixture = TestBed.createComponent(ContectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
