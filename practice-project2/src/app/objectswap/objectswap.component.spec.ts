import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectswapComponent } from './objectswap.component';

describe('ObjectswapComponent', () => {
  let component: ObjectswapComponent;
  let fixture: ComponentFixture<ObjectswapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectswapComponent]
    });
    fixture = TestBed.createComponent(ObjectswapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
