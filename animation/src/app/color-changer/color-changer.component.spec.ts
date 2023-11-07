import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChangerComponent } from './color-changer.component';

describe('ColorChangerComponent', () => {
  let component: ColorChangerComponent;
  let fixture: ComponentFixture<ColorChangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorChangerComponent]
    });
    fixture = TestBed.createComponent(ColorChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
